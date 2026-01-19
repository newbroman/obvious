/**
 * audio.js - Cross-Browser Speech Engine
 */

let polishVoice = null;
let audioUnlocked = false;

// CRITICAL FOR MOBILE/FIREFOX/DDG: Prevents garbage collection
window.activeUtterance = null; 

/**
 * Finds the best Polish voice available.
 */
function findVoice() {
    if (!('speechSynthesis' in window)) {
        console.log('❌ Speech Synthesis not available');
        return;
    }
    const voices = window.speechSynthesis.getVoices();
    console.log('🎤 Available voices:', voices.length);
    console.log('🇵🇱 Looking for Polish voices...');
    
    // Log all voices for debugging
    voices.forEach(v => {
        if (v.lang.startsWith('pl')) {
            console.log('  ✅ Polish voice found:', v.name, v.lang);
        }
    });
    
    polishVoice = voices.find(v => v.lang === 'pl-PL' || v.lang === 'pl_PL' || v.lang.startsWith('pl'));
    
    if (polishVoice) {
        console.log('✅ Selected Polish voice:', polishVoice.name, polishVoice.lang);
    } else {
        console.warn('⚠️ No Polish voice found, will use system default');
    }
}

export function loadVoices() {
    findVoice();
}

// Ensure voices are detected when they check in
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
}

/**
 * Initialization check used by app.js
 */
export function checkVoices(onReady) {
    if (!('speechSynthesis' in window)) return;
    
    const runCheck = () => {
        findVoice();
        if (onReady) onReady(!!polishVoice);
    };

    if (window.speechSynthesis.getVoices().length > 0) {
        runCheck();
    } else {
        window.speechSynthesis.onvoiceschanged = runCheck;
    }

    // Backup check for slower mobile browsers
    setTimeout(runCheck, 1000);
}

/**
 * ESSENTIAL FOR MOBILE: Un-mutes the engine.
 * Must be called from a user click/touchstart.
 */
export function unlockAudio() {
    try {
        const talk = new SpeechSynthesisUtterance("");
        talk.volume = 0; 
        window.speechSynthesis.speak(talk);
        audioUnlocked = true;
        console.log("🔊 Audio engine primed.");
    } catch (e) {
        console.error("Audio unlock failed", e);
    }
}

/**
 * The Main Speak Function - Exported for events.js
 */
export function speakText(text, speed = 0.85) {
    console.log('🔊 speakText called with:', text, 'speed:', speed);
    
    if (!text) {
        console.error('❌ No text provided to speakText');
        return;
    }
    
    if (!('speechSynthesis' in window)) {
        console.error('❌ Speech Synthesis not supported in this browser');
        return;
    }

    console.log('✅ Speech Synthesis is available');
    console.log('🎤 Polish voice:', polishVoice ? polishVoice.name : 'None found (will use default)');

    // 1. Force Resume & Clear Queue (Fixes Opera/Firefox hang)
    window.speechSynthesis.resume();
    window.speechSynthesis.cancel();

    // 2. Attach to window to prevent sound cutting off mid-sentence
    window.activeUtterance = new SpeechSynthesisUtterance(text);
    
    // 3. Set Language and Voice
    window.activeUtterance.lang = 'pl-PL';
    if (polishVoice) {
        window.activeUtterance.voice = polishVoice;
    }

    // 4. Learner-friendly settings with variable speed
    window.activeUtterance.rate = speed;
    window.activeUtterance.pitch = 1.0;
    
    // 5. Add event listeners for debugging
    window.activeUtterance.onstart = () => console.log('🎵 Speech started');
    window.activeUtterance.onend = () => console.log('✅ Speech ended');
    window.activeUtterance.onerror = (e) => console.error('❌ Speech error:', e);

    // 6. Speak (with a tiny delay to ensure cancel() finished)
    console.log('🚀 Attempting to speak...');
    setTimeout(() => {
        window.speechSynthesis.speak(window.activeUtterance);
        console.log('📢 speak() called, queue length:', window.speechSynthesis.pending ? 'pending' : 'not pending');
    }, 50);
}

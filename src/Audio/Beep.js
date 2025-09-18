// Play a simple beep
export const Beep = (frequency = 440, duration = 0.3) => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
  oscillator.start();
  gainNode.gain.exponentialRampToValueAtTime(
    0.0001,
    ctx.currentTime + duration
  );
  oscillator.stop(ctx.currentTime + duration);
};

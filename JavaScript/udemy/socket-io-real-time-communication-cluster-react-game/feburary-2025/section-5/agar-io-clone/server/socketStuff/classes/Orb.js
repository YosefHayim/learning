class Orb {
  constructor(settings) {
    this.color = this.getRandomColor();
    this.locX = Math.floor(Math.random() * settings.worldHeight);
    this.locY = Math.floor(Math.random() * settings.worldHeight);
    this.radius = settings.defaultGenericOrbSize; // Generic orb size
  }

  getRandomColor() {
    const r = Math.floor(Math.random() * 200 + 50);
    const g = Math.floor(Math.random() * 200 + 50);
    const b = Math.floor(Math.random() * 200 + 50);

    // rgb(112,24,59)
    return `rgb(${r},${g},${b})`;
  }
}

module.exports = Orb;

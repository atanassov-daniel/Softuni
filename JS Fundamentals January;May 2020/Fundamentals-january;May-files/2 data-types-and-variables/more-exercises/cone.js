function calculateVolumeAndArea(radius, height) {
    let volume = 1 / 3 * Math.PI * Math.pow(radius, 2) * height;
    console.log(`volume = ${volume.toFixed(4)}`);
    let s = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let l = Math.PI * radius * s;
    let b = Math.PI * Math.pow(radius, 2);
    let area = l + b;
    console.log(`area = ${area.toFixed(4)}`);
}

calculateVolumeAndArea(3, 5)
function plateRotation(bandName, albumName, songName) {
    let songLength = (albumName.length * bandName.length) * songName.length / 2;
    console.log(`The plate was rotated ${Math.ceil(songLength / 2.5)} times.`);
}

plateRotation('Black Sabbath', 'Paranoid', 'War Pigs')
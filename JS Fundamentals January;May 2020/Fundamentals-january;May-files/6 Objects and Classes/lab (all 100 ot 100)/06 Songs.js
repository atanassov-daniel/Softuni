function solve(arr) {
    let numberOfSongs = arr.shift();
    let typeToPrint = arr.pop();
    let songs = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (i = 0; i < arr.length; i++) {
        let splitted = arr[i].split('_');

        let typeList, name, time;
        [typeList, name, time] = [splitted[0], splitted[1], splitted[2]];

        let song = new Song(typeList, name, time);
        songs.push(song);

        if (song.typeList === typeToPrint) {
            console.log(song.name);
        } else if (typeToPrint === 'all') {
            console.log(song.name);
        }
    }
}

/*solve([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);*/

/*solve([
    4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
]);
*/
solve([
    2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]);
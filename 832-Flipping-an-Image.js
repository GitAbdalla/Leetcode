/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    let inverting = x => {
        return x === 0 ? 1 : 0;
    };

    for (let i = 0; i < image.length; i++) {
        let ptr1 = 0;
        let ptr2 = image[i].length - 1;

        while (ptr1 <= ptr2) {

            [image[i][ptr1], image[i][ptr2]] = [image[i][ptr2], image[i][ptr1]]


            image[i][ptr1] = inverting(image[i][ptr1]);
            if (ptr1 !== ptr2) {
                image[i][ptr2] = inverting(image[i][ptr2]);
            }

            ptr1++;
            ptr2--;
        }
    }
    return image;
};
function imageTruncation(image, threshold) {

    for (var i = 0; i < image.length; i++) {
        for (var j = 0; j <= image.length ; j++) {
            if (image[i][j] > threshold) {
                image[i][j] = threshold;
            }
        }
    }
    return image;
}

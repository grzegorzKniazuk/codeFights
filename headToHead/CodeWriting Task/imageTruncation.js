function imageTruncation(image, threshold) {
    let width=image[0].length, height=image.length;
    for (let i=0;i<height;i++) {
        for (let j=0;j<width;j++) {
            image[i][j]=image[i][j]>=threshold?threshold:image[i][j];
        }
    }
    return image;
}
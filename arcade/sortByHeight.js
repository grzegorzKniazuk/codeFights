function sortByHeight(a) {
    for(let i=0,x=a.length;i<x;i++) {
        for(let j=0,x=a.length,temp;j<x;j++) {
            if(a[i]>a[i+j] && (a[i]!==-1&&a[i+j]!==-1)) {
                temp = a[i];
                a[i]=a[i+j];
                a[i+j]=temp;
            }
        }
    }
    return a;
}
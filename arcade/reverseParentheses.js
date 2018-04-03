function reverseParentheses(s) {
    let center='', // string part to reverse
        left='',
        right='',
        reversed='',
        start,
        end;

    while (s.indexOf('(')!==-1) {
        for(let i=0,x=s.length;i<x;i++) { // get string start/stop for reverse
            if(s[i]==='(') {
                start=i;
                for(j=i+1;j<x;j++) {
                    if(s[j]==='(') {
                        start=j;
                        break;
                    }
                    else if(s[j]===')') {
                        end=j;
                        break;
                    }
                }
            }
        }

        left=s.slice(0,start);
        right=s.slice(end+1,s.length);
        center=s.slice(start+1,end);
        reversed='';

        for(let i=center.length-1;i>=0;i--) { // reverse
            reversed+=center[i];
        }
        s=left+reversed+right;
    }
    return s;
}
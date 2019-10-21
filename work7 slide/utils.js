function bubbleSort(str){
    let arr =str.split(',')
    let sorLog =[]
for(let i=0;i<arr.length-1; i++){
    for(let j=0; j<arr.length-i-1;j++){
        sorLog.push([arr.concat(),[j, j+1]])
        sorLog.push([arr.concat(),[j, j+1]])
        sorLog.push([arr.concat(),[j, j+1]])
        if(arr[j]>arr[j+1]){
            [arr[j], arr[j+1]]=[arr[j+1],arr[j]]
            sorLog.push([arr.concat(),[j, j+1]])
        }
    }
}
sorLog.push([arr.concat(),[-1, -1]])
return sortlog
}
function showLog(logValues,showElement) {
    let str =''
    let{
        done,
        value : [roe,pos ]
    }= logValues.next()
    for (const key in row){
        let color=pos .index0f(Number(key))>-1?'color:blue;':
        str +='<span style ="font-size:'+row[key]*20+'px;'+
        color+'">'+row[key]+'</span>'
        showElement.innerHTML =str
        if(pos[0] !=-1)
        setTimeout(" showLog(logValues,showDiv)",500)

    }
}
function insertSort(str){
    let arr = str.split(',')
    for (let i=1;i<arr.length; i++){
        for (let j=i;j>0;j--){
            if (arr[j-1]>arr[j]){
                [arr[j-1],arr [j]]=[arr[j],arr[j-1]]
            }
        }
    }
    return arr
}
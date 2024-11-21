<script type="text/javascript">
    record=[10,20,50,3,40];
    console.log(record);
   let max=-Infinity;
    let last=record.length-1;
    for (let i=0; i <= last; i++) {
        if(max<record[i]){
            max=record[i];
        }
        console.log(max);
        
    }
    

</script>
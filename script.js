function deretGanjilGenap(angka){
    for(i=1; i<=angka; i++){
        if(i%2 ==0){
            console.log(i + "adalah Genap");
        }
        else{
            console.log(i + "adalah Ganjil")
        }
    }
}

deretGanjilGenap(20);
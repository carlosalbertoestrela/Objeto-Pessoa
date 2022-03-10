const pessoa = {
    nome:"Carlos",
    altura:1.75,
    peso:75.6,
    genero:"Masculino",
    calorias:0,
    acordado: false,
    efeito: function(){
        while (this.calorias >= 7000){
            this.peso += 1;
            this.calorias -= 7000;
        }
        while(this.calorias <=-7000){
            this.peso -= 1;
            this.calorias += 7000;
        }
    },
        
    correr: function(tempo_H=0){
        if(!this.acordado){
            return "zZzZzZz..."
        } else {
            while(tempo_H >= 0){
                this.calorias -= 700;
                --tempo_H;
            }
            this.efeito();
            return "Runn!!!!"
        }
    },
    basquete: function(tempo_H=0,){
        if(!this.acordado){
            return "zZzZzZz..."
        } else {
            while(tempo_H >= 0){
                this.calorias -= 440;
                --tempo_H;
            }
            this.efeito();
            return "Cestaaa!!!"
        }
    },
    nadar: function(tempo_H=0){
        if(!this.acordado){
            return "zZzZzZz..."
        } else {
            while(tempo_H >= 0){
                this.calorias -= 514;
                --tempo_H;
            }
            this.efeito();
            return "Splash!!!!"
        }
    },
    malhar: function(tempo_H=0){
        if(!this.acordado){
            return "zZzZzZz..."
        } else {
            while(tempo_H >= 0){
                this.calorias -= 500;
                --tempo_H;
            }
            this.efeito();
            return "Biiiiiirlll!!!"
        }  
    },
    acordar: function(){
        return this.acordado = true;
    },
    dormir:function() {
        this.acordado = false;
        this.calorias -= 300;
        this.efeito();
        return "zZzZzZz..."
    },
    
    comer: function(calorias=0){
        if(!this.acordado){
            return "zZzZzZz..."
        } else{
            this.calorias += calorias;
            this.efeito();
            return "Nham...Nham...Nham..."
        }
    }
    ,   
    imc: function(){
        valor = parseFloat((this.peso / this.altura**2).toFixed(2));
        if(valor < 18.5){
            return "magreza";
        } else if (valor < 25){
            return "normal";
        } else if (valor < 30){
            return "sobrepeso";
        } else if (valor < 40){
            return "obesidade";
        } else {
            return "obesidade grave";
        }
    },
}

console.log(pessoa)
export class Utente{
    private _nome: string;
    private _cognome:string;
    private _eta:number;

    constructor(nome:string,cognome:string,eta:number){
        this._nome=nome;
        this._cognome=cognome;
        this._eta=eta;
    }
    get nome() :string{
        return this._nome;
    }
    set nome(nome:string){
        this._nome=nome;
    }
    get cognome() :string{
        return this._cognome;
    }
    set cognome(cognome:string){
        this._cognome=cognome;
    }
    get eta() :number{
        return this._eta;
    }
    set eta(eta:number){
        this._eta=eta;
    }
}
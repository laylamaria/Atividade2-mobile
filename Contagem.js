import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export class Contagem extends Component {
    constructor(props){
        super(props);
        this.state = {
            cidades: [
                {cidade: 'Fortaleza', votos: 0},
                {cidade: 'Quixada', votos: 0},
                {cidade: 'Limoeiro', votos: 0},
                {cidade: 'Juazeiro', votos: 0},
            ]
        }
    }

    somar(index) {
        console.log(this.state.cidades[index].votos);
        let array = [...this.state.cidades];
        array[index].votos = this.state.cidades[index].votos + 1;
        this.setState({
            cidades: array,
        })
    }

    render() {
        let cidades = [];
        let botoes = [];
        let maior = Math.max.apply(null, this.state.cidades.map((buscar) => (buscar.votos)))
        let menor = Math.min.apply(null, this.state.cidades.map((buscar) => (buscar.votos)))
        let maisVotadas = [];
        let menosVotadas = [];
        
        console.log(maior+", " +menor)

        this.state.cidades.map((buscar, index)=>{
            cidades.push (<Text key = {index}>{buscar.cidade}: {buscar.votos} votos</Text>)
            botoes.push(<Button key={index} title={buscar.cidade} onPress={()=>{this.somar(index)}}> </Button> )
        
            if (buscar.votos == maior && maior > 0) {
                maisVotadas.push(buscar.cidade)
            }
            if (buscar.votos == menor && menor != maior) {
                menosVotadas.push(buscar.cidade)
            }
        })


        return (
            <View>
                <Text> 
                    VOTAÇÃO DE CIDADES
                </Text>
                {cidades}
                <Text>
                    MAIS VOTADA(s): {maisVotadas}
                </Text>
                <Text>
                    MENOS VOTADA(s): {menosVotadas}
                </Text>
                <Text>
                    {botoes}
                </Text>
            </View>
        )
    }
}

export default Contagem
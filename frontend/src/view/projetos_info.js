import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import perfil from "./imagens/perfil.jpg";
import line from "./imagens/line.svg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";

import './css/projetos_info.css';

const baseUrl = "http://localhost:3000";
class projetos_info extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            dataEmployee: {},
            campName: "",
            campEmail: "",
            campPhone: "",
            campAddress: "",
        }
    }
    componentDidMount() {
        let userId = this.props.match.params.employeeId;
        const url = baseUrl + "/users/projetos_detail/" + userId
        axios.get(url)
            .then(res => {
                if (res.data.sucess) {
                    const data = res.data.data[0]
                    this.setState({
                        dataEmployee: data,
                        campName: data.NomeProjeto,
                        campEmail: data.DataInicio,
                        campPhone: data.DataFim,
                        campAddress: data.ID_Projeto
                    })
                }
                else {
                    alert("Error web service")
                }
            })
            .catch(error => {
                alert("Error server: " + error)
            })
    }



    render() {
        return (
            <div class="container-fluid">

                <div class="row">
                    <nav class="navbar">
                        <a class="navbar-brand" href="home_dev.html"><Link to="/projetos"><img class="img1" src={Logo} /></Link></a>
                        <div class="nav_list">
                            <ul>
                                <li><a href="utilizadores_dev.html"><Link to="/utilizador">Utilizadores</Link></a></li>
                                <li><a href="projeto_dev.html"><Link to="/utilizadores">Projeto</Link></a></li>
                                <li>
                                    <div class="dropdown">
                                        <a class="dropbtn">Nome</a>
                                        <div class="dropdown-content">
                                            <a href="#"><Link to="/info_pessoal_dev">Perfil</Link></a>
                                            <a href="index.html"><Link to="/">Terminar Sessão</Link></a>

                                        </div>
                                    </div>
                                </li>

                                <li class="user">
                                    <a><img class="img2" src={user} /></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>


            <div class="row">
                
    
                        <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">
                            
                                <div class="card">
                                    <div class="title">
                                        <h2>Criação de um Gestor de Equipas</h2>
                                    </div>
                                    
                                </div>
                        </div>
    
                        <div class="conteudo col-sm-12 col-lg-6 col-md-12 col-xl-6">
                            
                            <div class="card">
                                <div class="conteudo_1">
                                    <img class="line" src={line}/>
                                    <h5>Membros da Equipa</h5>
                                    <svg width="400">
                                        <line class="svg" x1="400" y1="0" />
                                    </svg>
                                </div>
                                <div class="conteudo_2">
                                    <div class="column">
                                        <img class="img_perfil" src={perfil}  />
                                        <p>João Souza</p>
                                      </div>
                                      <div class="column">
                                        <img class="img_perfil" src={perfil}  />
                                        <p>João Souza</p>
                                      </div>
                                </div>
                                <div class="conteudo_2">
                                    <div class="column">
                                        <img class="img_perfil" src={perfil} />
                                        <p>João Souza</p>
                                      </div>
                                      <div class="column">
                                        <img class="img_perfil" src={perfil}  />
                                        <p>João Souza</p>
                                      </div>
                                </div>
    
                                
                            </div>
                    </div>
    
                    <div class="conteudo col-sm-12 col-lg-6 col-md-12 col-xl-6">
                            
                        <div class="card">
                            <div class="conteudo_1">
                                <h5>Descrição Projeto</h5>
                                <svg width="400">
                                    <line class="svg" x1="400" y1="0" />
                                </svg>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor iaculis molestie. In viverra id justo quis mattis. Etiam felis nisi, placerat ut mi eu, euismod convallis dolor. Cras mollis, risus nec eleifend ornare, lorem purus scelerisque nunc, sed congue arcu elit ac turpis. Cras id nunc tristique, pulvinar elit sit amet, dignissim erat. Nulla nunc nulla, vestibulum ut cursus sit amet, aliquam et nisl. Proin tempus erat eget libero vulputate rhoncus. Aliquam nec pharetra risus. Duis egestas nunc lectus, eu aliquet tellus imperdiet ut. Aliquam bibendum mi interdum feugiat vestibulum. Fusce vel consectetur lacus, eget accumsan urna. Integer ac urna et ante rutrum mollis.
    
                                    Ut lectus dolor, maximus vel sapien et, hendrerit laoreet velit. Aliquam iaculis cursus mi sed iaculis. Nunc commodo dui lectus, eget cursus mauris dapibus quis. Nulla sagittis nisi nec felis imperdiet dictum. Mauris semper turpis augue, quis efficitur ipsum congue sit amet. Nunc bibendum luctus sem, id euismod lacus accumsan vitae. Proin dapibus sapien mi, quis fermentum sem faucibus ac. Pellentesque vitae orci id mi lacinia auctor ac at mi.
                                    </p>
                                    <div class="form-row justify-content-center">
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Name</label>
                        <input type="text" class="form-control" placeholder="Name"
                            value={this.state.campName} onChange={(value) =>
                                this.setState({ campName: value.target.value })} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" placeholder="Email"
                            value={this.state.campEmail} onChange={(value) =>
                                this.setState({ campEmail: value.target.value })} />
                    </div>
                </div>
                                </div>
                            </div>
                        </div>
                </div>
    
    
               
            </div>
        </div>
        );
    }
}
export default projetos_info;
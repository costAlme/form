// UserForm.js

import React, { useState } from 'react'
import SubmitButton from '../template/SubmtiButton'
import InputField from '../template/InputField'

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  }); // Adicionado o estado para o status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const saveDataForm = true;

    if(saveDataForm){
      setStatus({
        type: 'sucess',
        message: "Usuario cadastrado com sucesso"
      });
      setFormData({
        name: '',
        password: ''
      });
    }else{
        setStatus({
          type: 'sucess',
          message: "Usuario nao cadastrado"
        });
      }

  }
 
    // Aqui você pode adicionar a lógica de envio para um servidor, por exemplo.
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Nome"
        type="text"
        name="Nome"
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        label="Senha"
        type="password"
        name="password"
        value={formData.senha}
        onChange={handleChange}
      />
      <SubmitButton label="Login" /> {/* Corrigido o nome do label */}
      {status.type && <div>{status.message}</div>} {/* Mostra o status se estiver definido */}
    </form>
  );


export default UserForm;

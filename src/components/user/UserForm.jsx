import React, { useState } from 'react';
import SubmitButton from '../template/SubmtiButton';
import InputField from '../template/InputField';

function UserForm() {
  const [formData, setFormData] = useState({
    nome: '',
    senha: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  

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

    if (saveDataForm) {
      setStatus({
        type: 'success',
        message: "Usuário cadastrado com sucesso"
      });
      setFormData({
        name: '',
        password: ''
      });
     
    } else {
      setStatus({
        type: 'error',
        message: "Usuário não cadastrado"
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Nome"
        type="text"
        name="nome"
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        label="Senha"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <SubmitButton label="Login" />
    </form>
  );
}

export default UserForm;

import { useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;
const Form = ({ onEdit, setOnEdit, getUsers }) => {
  const formRef = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = formRef.current;
      user.name.value = onEdit.name;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.birth_date.value = onEdit.birth_date;
    }
  }, [onEdit]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = formRef.current;

    console.log(
      user.name.value,
      user.email.value,
      user.fone.value,
      user.birth_date.value
    );

    // if (
    //   !user.name.value ||
    //   !user.email.value ||
    //   !user.fone.value ||
    //   !user.birth_date.value
    // ) {
    //   return toast.warn("Fill in all fields");
    // }
    if (onEdit) {
      try {
        await axios
          .put("http://localhost:3001/" + onEdit.id, {
            name: user.name.value,
            email: user.email.value,
            fone: user.fone.value,
            birth_date: user.birth_date.value,
          })
          .then(({ data }) => toast.success(data));
      } catch (err) {
        toast.error(err);
      }
    } else {
      try {
        await axios
          .post("http://localhost:3001", {
            name: user.name.value,
            email: user.email.value,
            fone: user.fone.value,
            birth_date: user.birth_date.value,
          })
          .then(({ data }) => toast.success(data));
      } catch (err) {
        toast.error(err);
      }
    }

    user.name.value = "";
    user.email.value = "";
    user.fone.value = "";
    user.birth_date.value = "";

    setOnEdit(null);
    getUsers();
  };
  return (
    <FormContainer ref={formRef} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="name" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="fone" />
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="birth_date" type="date" />
      </InputArea>
      <Button>Salvar</Button>
    </FormContainer>
  );
};
export default Form;

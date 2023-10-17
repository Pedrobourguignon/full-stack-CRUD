import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import { FaTrash, FaEdit } from "react-icons/fa";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ users, setOnEdit, getUsers }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:3001/" + id).then(({ data }) => {
        toast.success(data);
      });
      getUsers();
    } catch (err) {
      toast.error(err);
    }
    setOnEdit(null);
  };

  const handleEdit = (item) => {
    setOnEdit(item);
  };
  return (
    <Table>
      <Thead>
        <Th>Nome</Th>
        <Th>Email</Th>
        <Th onlyWeb>Fone</Th>
        <Th></Th>
        <Th></Th>
      </Thead>
      <Tbody>
        {users.map((item, index) => (
          <Tr key={+index}>
            <Td width="30%">{item.name}</Td>
            <Td width="30%">{item.email}</Td>
            <Td width="20%" onlyWeb>
              {item.fone}
            </Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
export default Grid;

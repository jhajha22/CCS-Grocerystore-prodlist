import { Styles } from "./styles";
import { Button } from "../button";

import { PencilIcon } from "../icons/pencil";
import { TrashIcon } from "../icons/trash";
import { ItemForm } from "./form";
import { useContextHook } from '../../context/hook';
import { IItem } from "../../interfaces/IItem";

interface IProps extends IItem {
    position: number;
}

export const Item = ({ position, productID, name, price, quantity, id, isEditing = false }: IProps) => {

    const { deleteItem, toggleIsEditing } = useContextHook();

    return (
        <Styles.Container>
            <strong>{position}</strong>
            {
                isEditing
                    ? (
                        <ItemForm
                            {...{
                                productID,
                                name,
                                price,
                                quantity,
                                id,
                                isEditing,
                            }}
                        />
                    )
                    : (
                        <>
                            <p>{name ?? <i>Insert name</i>}</p>
                            <p>{productID ?? <i>Insert product ID</i>}</p>
                            <p>{quantity ?? <i>Insert quantity</i>}</p>
                            <p>{price ?? <i>Insert price</i>}</p>

                            <Styles.GroupButtons>
                                <Button onClick={() => toggleIsEditing(id)}>
                                    <PencilIcon />
                                </Button>
                                <Button onClick={() => deleteItem(id)}>
                                    <TrashIcon />
                                </Button>
                            </Styles.GroupButtons>
                        </>
                    )
            }
        </Styles.Container>
    )
}

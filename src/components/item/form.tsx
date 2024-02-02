import { useState } from 'react';
import { Styles } from "./styles";
import { IItem } from "../../interfaces/IItem";

import { Button } from "../button";
import { Input } from "../input";

import { SaveIcon } from "../icons/save";
import { CloseIcon } from "../icons/close";

import { useContextHook } from '../../context/hook';

export const ItemForm = ({ ...item }: IItem) => {

    const { toggleIsEditing, editItem } = useContextHook();

    const [formState, setFormState] = useState(item);

    const { productID = '', name = '', price = '', quantity = '', id } = formState || {};

    return (
        <>
            <Input
                name="Product name"
                placeholder="Product Name"
                onChangeText={(v) =>
                    setFormState((old) => ({ ...old, name: v }))}
                value={name}
                autoFocus
            />
            <Input
                name="Product ID"
                placeholder="Product ID"
                onChangeText={(v) =>
                    setFormState((old) => ({ ...old, productID: v }))}
                    value={productID}
                    autoFocus
            />        
            <Input
                name="Quantity"
                placeholder="Quantity"
                type="number"
                onChangeText={(v) =>
                    setFormState((old) => ({ ...old, quantity: ~~v }))}
                value={quantity}
            />
            <Input
                name="price"
                placeholder="Price"
                type="number"
                onChangeText={(v) =>
                    setFormState((old) => ({ ...old, price: ~~v }))}
                value={price}
            />
            <Styles.GroupButtons>
                <Button onClick={() => editItem(formState)}>
                    <SaveIcon />
                </Button>
                <Button onClick={() => toggleIsEditing(id)}>
                    <CloseIcon />
                </Button>
            </Styles.GroupButtons>
        </>
    )
}

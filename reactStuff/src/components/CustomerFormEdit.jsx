import React, { useEffect, useState, useRef } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "app/components/Grid/GridItem.js";
import GridContainer from "app/components/Grid/GridContainer.js";
import CustomInput from "app/components/CustomInput/CustomInput.js";
import Card from "app/components/Card/Card.js";
import CardHeader from "app/components/Card/CardHeader.js";
import CardBody from "app/components/Card/CardBody.js";
import CardFooter from "app/components/Card/CardFooter.js";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { lineItem } from './CustomerOrderLineItems';
import { MainForm } from './CustmoermainForm';

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0",
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
    },
    backgroundColorBlue: {
        backgroundColor: "#2059A7",
    },
    buttonStyling: {
        backgroundColor: "#2059A7",
        color: "#FFFFFF",
        width: "120px",
        padding: "5px",
        borderRadius: "5%",
    },
    input: {
        paddingTop: "25px !important",
    },
    labelText: {
        color: "#555555",
    }
};

.p {
    color: red;
}
const itemRef = useRef();

const useStyles = makeStyles(styles);
const urlCustomerOrder = `${process.env.REACT_APP_API_ENDPOINT}/CO`;
const urlCustomerOrderLine = `${process.env.REACT_APP_API_ENDPOINT}/COL`;

export default function CustomerOrderEdit() {

      //usestate hooks
    const [showButtonContinueCO, setShowButtonContinueCO] = useState(false);
    const [showButtonEditCO, setShowButtonEditCO] = useState(false);
    const [showButtonDeleteCO, setShowButtonDeleteCO] = useState(false);
    const [showButtonCancelCO, setShowButtonCancelCO] = useState(false);
    const [disableInputCO, setDisableInputCO] = useState(false);
    const [showButtonSaveCOL, setShowButtonSaveCOL] = useState(false);
    const [showButtonEditCOL, setShowButtonEditCOL] = useState(false);
    const [showButtonDeleteCOL, setShowButtonDeleteCOL] = useState(false);
    const [showButtonCancelCOL, setShowButtonCancelCOL] = useState(false);
    const [showButtonAddCOL, setShowButtonAddCOL] = useState(false);
    const [disableInputCOL, setDisableInputCOL] = useState(false);
    const [showFormCOL, setShowFormCOL] = useState(false);
    const [customerOrderLine, setCustomerOrderLine] = useState(false);
    const [customerOrderID, setCustomerOrderID] = useState(0);
    const [customerOrderIDEnabled, setCustomerOrderIDEnabled] = useState(false);

    const currentLineItems = [];

    //form related
    const onSubmitHandler = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const plainFormData = Object.fromEntries(formData.entries());
        const formDataJsonString = JSON.stringify(plainFormData);

        //API
        TypeOfAPICall(customerOrderLine);

        function TypeOfAPICall(customerOrderLine) {
            if (customerOrderLine == true) {
                axios
                    .post(
                        urlCustomerOrderLine,
                        formDataJsonString
                    )
                    .then((response) => {
                        if (response != null) {
                            if (response.status == 200) {
                                setShowButtonSaveCOL(true);
                                setShowButtonEditCOL(true);
                                setShowButtonDeleteCOL(true);
                                setShowButtonAddCOL(true);
                                setShowButtonCancelCOL(true);
                                setDisableInputCOL(true);
                            }
                        }
                    })
                    .catch(function (error) {
                        console.log(error + " posting to Customer Order Line");
                    });
            }
            else {
                axios
                    .post(
                        urlCustomerOrder,
                        formDataJsonString
                    )
                    .then((response) => {
                        if (response != null) {
                            if (response.status == 200) {
                                setCustomerOrderID(parseInt(response.data));
                                if (customerOrderID == "NaN") {
                                    console.log("Something has gone wrong with the customer order saving process")
                                }
                                else {
                                    setCustomerOrderLine(true);
                                    setShowButtonContinueCO(true);
                                    setShowButtonEditCO(true);
                                    setShowButtonDeleteCO(true);
                                    setShowButtonCancelCO(true);
                                    setDisableInputCO(true);
                                    setShowFormCOL(true);
                                    setCustomerOrderIDEnabled(false);
                                }
                            }
                        }
                    })
                    .catch(function (error) {
                        console.log(error + " posting to Customer Order");
                    });
            }
        };
    };

    function setCustomerOrderIDToPost() {
        setCustomerOrderIDEnabled(true);
    }

    const addItemHandler = () => {
        const item = itemRef.current;
        let newItem = {
            'CustomerId': item.CustomerId
        };

        currentLineItems.push(newItem);
    };

    const removeItemHandler = (event) => {
        const item = event.target.value;

        currentLineItems.removeat(item.id);
    };

    const editItemHandler = (event) => {
        const item = event.target.value;

        currentLineItems.removeat(item.id);
    };

    const deleteItemHandler = (event) => {
        const item = event.target.value;

        currentLineItems.removeat(item.id);
    };

    const classes = useStyles();

        const Lineitems = currentLineItems.map((item) => { <LineItem lineItem={item} saveItemHandler={saveItemHandler} />});

        return (
            <div>
                <MainForm onSubmit={onSubmitHandler}/>

                {showFormCOL && (
                    <form onSubmit={onSubmit}>
                        <GridContainer>
                            <Lineitems />
                            <NewLineItem addItemHandler={addItemHandler} />
                            <GridItem ref={itemRef} xs={12} sm={12}>
                                <Card>
                                    <CardHeader className={classes.backgroundColorBlue}>
                                        <h4 className={classes.cardTitleWhite}>Europa Sea Order Line Form</h4>
                                    </CardHeader>
                                    <CardBody>
                                            <GridItem xs={12} sm={12} md={2}>
                                                <CustomInput
                                                    labelText="Customer Order ID"
                                                    id="customerOrderID"
                                                    name="customerOrderID"
                                                    defaultValue={customerOrderID}
                                                    value={customerOrderID}
                                                    type="number"
                                                    formControlProps={{
                                                        required: true,
                                                        disabled: !customerOrderIDEnabled,
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={2}>
                                                <CustomInput
                                                    labelText="Line Number"
                                                    id="lineNumber"
                                                    name="lineNumber"
                                                    type="number"
                                                    formControlProps={{
                                                        required: true,
                                                        disabled: disableInputCOL,
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={2}>
                                                <CustomInput
                                                    labelText="Quantity"
                                                    id="quantity"
                                                    name="quantity"
                                                    type="number"
                                                    formControlProps={{
                                                        required: true,
                                                        disabled: disableInputCOL,
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={2}>
                                                <CustomInput
                                                    labelText="Item Code"
                                                    id="itemCode"
                                                    name="itemCode"
                                                    formControlProps={{
                                                        required: true,
                                                        disabled: disableInputCOL,
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={2}>
                                                <CustomInput
                                                    labelText="Description"
                                                    id="description"
                                                    name="description"
                                                    formControlProps={{
                                                        required: true,
                                                        disabled: disableInputCOL,
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={2}>
                                                <CustomInput
                                                    labelText="Range Description"
                                                    id="rangeDescription"
                                                    name="rangeDescription"
                                                    formControlProps={{
                                                        disabled: disableInputCOL,
                                                    }}
                                                />
                                            </GridItem>
                                        
                                    </CardBody>
                                    <CardFooter>
                                        {!showButtonSaveCOL && (<input type="submit" className={classes.buttonStyling} value="Save Item" onClick={() => setCustomerOrderIDToPost()} />)}
                                        {showButtonEditCOL && (<input className={classes.buttonStyling} value="Edit" />)}
                                        {showButtonDeleteCOL && (<input className={classes.buttonStyling} value="Delete" />)}
                                        {!showButtonCancelCOL && (<input type="reset" className={classes.buttonStyling} value="Cancel"  />)}
                                    </CardFooter>
                                    <CardFooter>
                                        {showButtonAddCOL && (<input className={classes.buttonStyling} value="Add Item" onClick={addItemHandler}/>)}
                                    </CardFooter>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </form>
                )}
            </div>
        );
    }
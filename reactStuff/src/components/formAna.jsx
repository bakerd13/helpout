import React, { useEffect, useState } from 'react';

import authService from 'app/api-authorization/AuthorizeService'

import 'bootstrap/dist/css/bootstrap.css';

import $ from 'jquery';

// @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";

// core components

import GridItem from "app/components/Grid/GridItem.js";

import GridContainer from "app/components/Grid/GridContainer.js";

import CustomInput from "app/components/CustomInput/CustomInput.js";

import Button from "app/components/CustomButtons/Button.js";

import Card from "app/components/Card/Card.js";

import CardHeader from "app/components/Card/CardHeader.js";

import CardBody from "app/components/Card/CardBody.js";

import CardFooter from "app/components/Card/CardFooter.js";

import axios from 'axios';

import AdapterDateFns from '@mui/lab/AdapterDateFns';

import LocalizationProvider from '@mui/lab/LocalizationProvider';

import DatePicker from '@mui/lab/DatePicker';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import { useState } from 'react';
import { set } from '@reduxjs/toolkit/node_modules/immer/dist/internal';
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

};

 

const useStyles = makeStyles(styles);

const url = XXX

 

const CustomerOrderEdit = () => {

    //usestate hook for API

    const [customerOrder, setCustomerOrder] = React.useState(null);
    const [newData, setNewData] = useState(false);

    useEffect(() => {
        if(newData)
        {
            updateFormValues(customerOrder);
            setNewData(false);
        }
        
    },[newData]);

    //set form related variables

    const onSubmit = (e) => {

        e.preventDefault();

        const form = e.currentTarget;

        const formData = new FormData(form);

        const plainFormData = Object.fromEntries(formData.entries());

        const formDataJsonString = JSON.stringify(plainFormData);

        //API
        axios.post(
                url,
                formDataJsonString
            )
            .then((response) => {
                if (response.statusText !== "OK") {
                    throw Error(response.statusText);
                }
                console.log(response);
                console.log(response.data);
                return response.data;
            })
            .then((data) => {
                console.log(data);
                var result = {...data};
                setCustomerOrder(result);
                setNewData(true);
            })
            .catch(function (error) {
                alert(error);
            });

    };

 
    const classes = useStyles();

    return (
        <div>
            <form onSubmit={onSubmit}>
                <GridContainer>

                    <GridItem xs={12} sm={12}>

                        <Card>

                            <CardHeader color="primary">

                                <h4 className={classes.cardTitleWhite}>Europa Sea Customer Order Form</h4>

                            </CardHeader>

                            <CardBody>

                                <GridContainer>

                                    <GridItem xs={12} sm={12} md={2}>

                                        <CustomInput
                                            value = {customerOrder.id}
                                            labelText="Account Holder"

                                            id="accountID"

                                            name="accountID"

 

                                            formControlProps={{

                                                required: true,

                                            }}

                                        />

                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={2}>

                                        <CustomInput
                                            
                                            labelText="Contact Name"

                                            id="contactName"

                                            name="contactName"

                                            formControlProps={{

                                                required: true,

                                            }}

                                        />

                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={2}>

                                        <CustomInput

                                            labelText="Customer Reference"

                                            id="customerReference"

                                            name="customerReference"

 

                                            formControlProps={{

                                                required: true,

                                            }}

                                        />

                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={2}>

                                        <CustomInput

                                            labelText="Customer Supplier"

                                            id="customerSupplierID"

                                            name="customerSupplierID"

                                            formControlProps={{

                                                required: true,

                                            }}

                                        />

                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={2}>

                                        <CustomInput

                                            labelText="Delivery Address"

                                            id="deliveryAddressID"

                                            name="deliveryAddressID"

                                            formControlProps={{

                                                required: true,

                                            }}

                                        />

                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={2}>

                                        <CustomInput

                                            labelText="Required Date"

                                            id="requiredDate"

                                            name="requiredDate"

                                            formControlProps={{

                                                required: true,

                                            }}

                                        />

                                    </GridItem>

                                </GridContainer>

                            </CardBody>

                            <CardFooter>

                                <input type="submit" id="customerOrderButton" class="MuiButtonBase-root MuiButton-root MuiButton-on-text makeStyles-button-54 makeStyles-primary-57" value="Continue" />

                            </CardFooter>

                        </Card>

                    </GridItem>

                </GridContainer>

            </form>

 

            { customerOrder.success && customerOrder.Id != null &&

            <form onSubmit={onSubmit} id="accordian">

                <GridContainer>

                    <GridItem xs={12} sm={12}>

                        <Card>

                            <CardHeader color="primary">

                                <h4 className={classes.cardTitleWhite}>Europa Sea Order Line Form</h4>

                            </CardHeader>

                            <CardBody>

                               <GridContainer>

                                    <GridItem xs={12} sm={12} md={2}>

                                        <CustomInput

                                            labelText="Customer Order ID"

                                            id="customerOrderID"

                                            name="customerOrderID"

                                            formControlProps={{

                                                required: true,

                                            }}

                                        />

                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={2}>

                                        <CustomInput

                                            labelText="Line Number"

                                            id="lineNumber"

                                            name="lineNumber"

                                            formControlProps={{

                                                required: true,

                                            }}

                                        />

                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={2}>

                                        <CustomInput

                                            labelText="Quantity"

                                            id="quantity"

                                            name="quantity"

                                            formControlProps={{

                                                required: true,

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

                                            }}

                                        />

                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={2}>

                                        <CustomInput

                                            labelText="Range Description"

                                            id="rangeDescription"

                                            name="rangeDescription"

                                            formControlProps={{

 

                                            }}

                                        />

                                    </GridItem>

                                </GridContainer>

                            </CardBody>

                            <CardFooter>

                                <input type="submit" class="MuiButtonBase-root MuiButton-root MuiButton-on-text makeStyles-button-54 makeStyles-primary-57" value="Save Item" />

                            </CardFooter>

                        </Card>

                    </GridItem>

                </GridContainer>

            </form>
}
        </div>

    );
}

export default CustomerOrderEdit;
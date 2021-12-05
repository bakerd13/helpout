const MainForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
                    <GridContainer>
                        <GridItem xs={12} sm={12}>
                            <Card>
                                <CardHeader className={classes.backgroundColorBlue}>
                                    <h4 className={classes.cardTitleWhite}>Europa Sea Customer Order Form</h4>
                                </CardHeader>
                                <CardBody>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={2}>
                                            <CustomInput
                                                labelText="Account Holder"
                                                id="accountID"
                                                name="accountID"
                                                formControlProps={{
                                                    required: true,
                                                    disabled: disableInputCO,
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
                                                    disabled: disableInputCO,
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
                                                    disabled: disableInputCO,
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
                                                    disabled: disableInputCO,
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
                                                    disabled: disableInputCO,
                                                }}
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={2}>
                                            
                                            <p>Required Date</p>
                                            <CustomInput
                                                id="requiredDate"
                                                name="requiredDate"
                                                type="date"
                                                formControlProps={{
                                                    required: true,
                                                    disabled: disableInputCO,
                                                }}
                                            />
                                        </GridItem>
                                    </GridContainer>
                                </CardBody>
                                <CardFooter>
                                    {!showButtonContinueCO && (<input type="submit" className={classes.buttonStyling} value="Continue" />)}
                                    {showButtonEditCO && (<input className={classes.buttonStyling} value="Edit" />)}
                                    {showButtonDeleteCO && (<input className={classes.buttonStyling} value="Delete" />)}
                                    {!showButtonCancelCO && (<input type="reset" className={classes.buttonStyling} value="Cancel" />)}
                                </CardFooter>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </form>
    );
}

export { MainForm }
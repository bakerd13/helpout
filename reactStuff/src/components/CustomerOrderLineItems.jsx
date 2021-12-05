
const LineItem = (props) => {


return (
<>
                                            <GridItem xs={12} sm={12} md={2}>
                                                <CustomInput
                                                    labelText="Customer Order ID"
                                                    id="customerOrderID"
                                                    name="customerOrderID"
                                                    defaultValue={customerOrderID}
                                                    value={prop.item.customerOrderID}
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

                                            <GridItem xs={12} sm={12} md={2}>
                                                <image src="downarrow" onClick={show}/>
                                            </GridItem>

                                            <container>
                                                <button>save</button>
                                            </container>
</>
);
}

export { LineItem };
import { useState } from 'react';
import { Form, Formik } from 'formik';
import dvostulkoveSchema71 from '../../img/miscount/dvostulkove-71.png';
import dvostulkoveSchema72 from '../../img/miscount/dvostulkove-72.png';
import balconLodgija76 from '../../img/miscount/balcon-lodgija-76.png';
import balconLodgija78 from '../../img/miscount/balcon-lodgija-78.png';
import balconLodgija92 from '../../img/miscount/dvostulkove-71.png';
import trystulkowe73 from '../../img/miscount/trystulkove-73.png';
import trystulkowe74 from '../../img/miscount/trystulkove-74.png';
import trystulkowe75 from '../../img/miscount/trystulkove-75.png';
import windowPhoto1 from '../../img/miscount/3стулкове вікно.png';
import windowPhoto2 from '../../img/miscount/глухе вікно.png';
import windowPhoto3 from '../../img/miscount/двостулкове вікно.png';
import windowPhoto4 from '../../img/miscount/лоджія.png';
import { AdditionalList, AskSize, AskSizeMore, BoxAnchor, BoxBtnSubmitMiscount, BoxButtonWindow, BoxCheckboxes, BoxImageSchema, BoxMiscount, BoxTextarea, BtnSubmitMiscount, ButtonWindow, ButtonWindowFor, ButtonWindowTree, ButtonWindowTwo,  Checkbox,  CheckboxContainer,  CheckboxGroup, CheckboxText, LabelCheckbox, MainImageWindow, MoreInfo, NameSchema, SchemaImage, SchemaImages, SchemaImagesSmall, Textarea, TitleCheckbox, TitleMiscount, WindowFormBox } from './Miscount.styled';
import { BsCheck } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { iconSize } from '../../constants/iconSize';


const initialValue = {
    toggle: [],
    color: [],
    width: '',
    height: '',
    dropdownValue: '',
    textareaValue: '',
}

const Miscount = () => {
    const [selectedImage, setSelectedImage] = useState(windowPhoto2);
    const [isChecked, setIsChecked] = useState(false);

    const handleButtonClick = (image) => {
        setSelectedImage(image);
    };

    const handleFormSubmit = (value, { resetForm }) => {
        console.log(value);
        resetForm();
    }

    return(
        <BoxMiscount>
            <BoxAnchor>
                <TitleMiscount name="miscount">Прорахунок вартості</TitleMiscount>
            </BoxAnchor>
            <BoxButtonWindow>
                <ButtonWindow type='button' onClick={() => handleButtonClick(windowPhoto2)}>
                    <SchemaImage src={dvostulkoveSchema71} alt="Odnostulkove Schema 70" />
                    <NameSchema>Одностулкове</NameSchema>
                </ButtonWindow>
                <ButtonWindowTwo type='button' onClick={() => handleButtonClick(windowPhoto3)}>
                    <BoxImageSchema>
                        <SchemaImages src={dvostulkoveSchema71} alt="Dvostulkove Schema71" width={59} />
                        <SchemaImages src={dvostulkoveSchema72} alt="Dvostulkove Schema72" width={59} />
                    </BoxImageSchema>
                    <NameSchema>Двостулкове вікно</NameSchema>
                </ButtonWindowTwo>
                <ButtonWindowTree type='button' onClick={() => handleButtonClick(windowPhoto1)}>
                    <BoxImageSchema>
                        <SchemaImages src={trystulkowe73} alt="trystulkowe73" width={45} />
                        <SchemaImages src={trystulkowe74} alt="trystulkowe74" width={46} />
                        <SchemaImages src={trystulkowe75} alt="trystulkowe73" width={45} />
                    </BoxImageSchema>
                    <NameSchema>Трьохстулкове вікно</NameSchema>
                </ButtonWindowTree>
                <ButtonWindowFor type='button' onClick={() => handleButtonClick(windowPhoto4)}>
                    <BoxImageSchema>
                        <SchemaImagesSmall src={balconLodgija92} alt="balcon Lodgija91" width={28} />
                        <SchemaImages src={balconLodgija78} alt="balcon Lodgija78" width={40} />
                        <SchemaImages src={balconLodgija76} alt="balcon Lodgija76" width={39} />
                        <SchemaImagesSmall src={balconLodgija92} alt="balcon Lodgija92" width={29} />
                    </BoxImageSchema>
                    <NameSchema>Балкон / лоджія</NameSchema>
                </ButtonWindowFor>
            </BoxButtonWindow>
            <WindowFormBox>
                <MainImageWindow src={selectedImage} alt="window Photo2" />
                <Formik initialValues={initialValue} onSubmit={handleFormSubmit}>
                    <Form autoComplete='none'>
                        <BoxCheckboxes>
                            <div>
                            <TitleCheckbox id="checkbox-group">Оберіть склопакет</TitleCheckbox>
                            <CheckboxGroup role="group" aria-labelledby="checkbox-group">
                                <LabelCheckbox>
                                <BsCheck
                                    style={{
                                    color: 'white',
                                    backgroundColor: isChecked ? 'var(--brand-orange)' : 'transparent',
                                    position: 'absolute',
                                    left: '-2px',
                                    borderRadius: '6px',
                                    padding: '2px',
                                    transition: 'background-color 0.3s',
                                    }}
                                />
                                    <Checkbox type="checkbox" name="toggle" value="Однокамерний (два скла)" onClick={() => setIsChecked(!isChecked)}/>
                                    <CheckboxText>Однокамерний (два скла)</CheckboxText>
                                </LabelCheckbox>
                                <LabelCheckbox>
                                    <BsCheck
                                        style={{
                                        color: 'white',
                                        backgroundColor: isChecked ? 'var(--brand-orange)' : 'transparent',
                                        position: 'absolute',
                                        left: '-2px',
                                        borderRadius: '6px',
                                        padding: '2px',
                                        transition: 'background-color 0.3s',
                                        }}
                                    />
                                    <Checkbox type="checkbox" name="toggle" value="Двокамерний (три скла)" onClick={() => setIsChecked(!isChecked)}/>
                                    <CheckboxText>Двокамерний (три скла)</CheckboxText>
                                </LabelCheckbox>
                                </CheckboxGroup>
                            </div>
                            <div>
                                <TitleCheckbox id="checkbox-group">Оберіть склопакет</TitleCheckbox>
                                <CheckboxGroup role="group" aria-labelledby="checkbox-group">
                                <LabelCheckbox>
                                    <BsCheck
                                        style={{
                                        color: 'white',
                                        backgroundColor: isChecked ? 'var(--brand-orange)' : 'transparent',
                                        position: 'absolute',
                                        left: '-2px',
                                        borderRadius: '6px',
                                        padding: '2px',
                                        transition: 'background-color 0.3s',
                                        }}
                                    />
                                    <Checkbox type="checkbox" name="toggle" value="Білий" onClick={() => setIsChecked(!isChecked)}/>
                                    <CheckboxText>Білий</CheckboxText>
                                </LabelCheckbox>
                                <LabelCheckbox>
                                <BsCheck
                                    style={{
                                    color: 'white',
                                    backgroundColor: isChecked ? 'var(--brand-orange)' : 'transparent',
                                    position: 'absolute',
                                    left: '-2px',
                                    borderRadius: '6px',
                                    padding: '2px',
                                    transition: 'background-color 0.3s',
                                    }}
                                />
                                    <Checkbox type="checkbox" name="toggle" value="Ламінація" onClick={() => setIsChecked(!isChecked)}/>
                                    <CheckboxText>Ламінація</CheckboxText>
                                </LabelCheckbox>
                            </CheckboxGroup>
                                    </div>
                        </BoxCheckboxes>
                                <CheckboxContainer>
                                    <label>
                                        <AskSize type="text" name="width" placeholder="Ширина (мм)"/>
                                    </label>
                                    <label>
                                        <AskSize type="text" name="height" placeholder="Висота (мм)"/>
                                    </label>
                                </CheckboxContainer>
                        <AdditionalList htmlFor="dropdownValue">
                            <MdKeyboardArrowDown size={iconSize.sm} style={{
                                    position: 'absolute',
                                    right: '8px',
                                    top: '-1px',
                                    color: 'var(--brand-gray)'
                            }}/>
                            <AskSizeMore as="select" id="dropdownValue" name="dropdownValue">
                                <option value="" label="Додаткові опції" />
                                <option value="option1">Склопакет з аргоном</option>
                                <option value="option2">Москітна сітка</option>
                                <option value="option3">Підвіконня</option>
                                <option value="option3">Ручка з замком</option>
                            </AskSizeMore>
                        </AdditionalList>
                        <BoxTextarea>
                            <MoreInfo htmlFor="textareaValue">Додаткова інформація</MoreInfo>
                            <Textarea as="textarea" id="textareaValue" name="textareaValue" placeholder="Потрібен профіль Rehau"/>
                        </BoxTextarea>
                    <BoxBtnSubmitMiscount>
                        <BtnSubmitMiscount type="submit">Відправити</BtnSubmitMiscount>
                    </BoxBtnSubmitMiscount>
                    </Form>
                </Formik>
            </WindowFormBox>
        </BoxMiscount>
    )
};

export default Miscount;
import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMessage";
import { Select } from "antd";
import { CustomSelectContainer } from "./style";
import dropDownIcon from '../../assets/icons/ic_add_property_search.svg';

const SelectComp = (props) => {
  const { name, placeholder, loading , handleSelectValue = null , onSelect, defaultValue, label, options,icon={dropDownIcon}, ...rest } =
    props;

  const OptionsArr = options?.map((option) => {
    return (
      <Select.Option key={option.id} value={option.id}>
        {option.name}
      </Select.Option>
      
    );
  });

  return (
    <CustomSelectContainer>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest}>
        {({ field, form, meta }) => {
          return (
            <div className="custom-select-inner">
              <Select
                className="custom-ExpertProfile-mySelect"
                showSearch
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
                suffixIcon={<img src={icon} alt="search"/>}
                name={name}
                {...rest}
                id={name}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChange={(val) => {
                  form.setFieldValue(name, val);
                }}
                
                loading={loading}
                onSelect={(value) => handleSelectValue(value)}
              >
                {OptionsArr}
              </Select>
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </CustomSelectContainer>
  );
};

export default SelectComp;

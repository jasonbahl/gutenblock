import Inspector from './inspector';

const Edit = ({ attributes, setAttributes, isSelected }) => {
  let { title } = attributes;
  return (
    <React.Fragment>
      <Inspector
        attributes={attributes}
        setAttributes={setAttributes}
        isSelected={isSelected}
      />
      <div style={{ backgroundColor: 'black' }}>{title}</div>
    </React.Fragment>
  );
};

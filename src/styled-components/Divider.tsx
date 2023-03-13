import styled from "styled-components";

const StyledDivider = styled.div`
  .divider {
    width: 100%;
    height: 5px;
    background-color: gray;
  }
`;

const Divider = () => {
  return (
    <StyledDivider>
      <div className="divider"></div>
    </StyledDivider>
  );
};

export default Divider;

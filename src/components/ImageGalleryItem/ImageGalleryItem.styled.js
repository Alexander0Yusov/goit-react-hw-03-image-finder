import styled from '@emotion/styled';

export const Thumb_div = styled.div`
  padding: 0;
  border: 1px solid red;
  width: 300px;
`;

/*
настройка стилей в зависимости от пропсов (это вставить в поле -> ` ... `)
но также канает логика ветвления тернарника, свича ... любая js
  ${props => {
    console.log(props.bgImage);
  }}

  background-color: ${props => `url(${props.bgImage})`}
  */

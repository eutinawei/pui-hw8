import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  background: url(${props => props.img}) no-repeat center/cover;
  border: 0px;
  width: 22px;
  height: 22px;
  margin-right: 20px;
`

const Icon = ({img, link}) => (
  <Wrapper img={img} onClick={()=> window.open(link, "_blank")}/>
)

export default Icon;
import styled from 'styled-components'

export const Container = styled.div`

@media (max-width: 700px) {
  .colored:nth-child(1) {
    background: url(./img/Mobile-ModelOne.jpg) center no-repeat #fff;
  }
  .colored:nth-child(2) {
    background: url(./img/Mobile-ModelTwo.jpg) center no-repeat #fff;
  }
  .colored:nth-child(3) {
    background: url(./img/Mobile-ModelThree.jpg) center no-repeat #fff;
  }
  .colored:nth-child(4) {
    background: url(./img/Mobile-ModelFour.jpg) center no-repeat #fff;
  }
}
@media (min-width: 700px) {
  .colored:nth-child(1) {
    background: url(./img/modelOne.jpg) center no-repeat #fff;
  }
  .colored:nth-child(2) {
    background: url(./img/modelTwo.jpg) center no-repeat #fff;
  }
  .colored:nth-child(3) {
    background: url(./img/modelThree.jpg) center no-repeat #fff;
  }
  .colored:nth-child(4) {
    background: url(./img/modelFour.jpg) center no-repeat #fff;
  }
}
  
  .colored:nth-child(5) {
    background: #191970;
  }
  .colored:nth-child(6) {
    background: #000080;
  }
  .colored:nth-child(7) {
    background: #00008B;
  }
`

export const Spacer = styled.div`
  height: 15vh;
  background: #0000CD;
`

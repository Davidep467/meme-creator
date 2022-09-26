import React, { useState } from 'react';
import html2canvas from 'html2canvas';

const DataContext = React.createContext({
    UpperText: "",
    LowerText: "",
    ThirdText: "",
    Image: null
});

export const DataContextProvider = (props) => {
    const [SupInpValue, setSupInpValue] = useState ('');
    const [InfInpValue, setInfInpValue] = useState (''); 
    const [ThiInpValue, setThiInpValue] = useState (''); 
    const [ImgValue, setImgValue] = useState(null);
    const [PassElemUp, setPassElemUp] = useState(false);
    const [PassElemLo, setPassElemLo] = useState(false);
    const [PassElemTh, setPassElemTh] = useState(false);
    const [ElemidUp, setElemidUp] = useState(); 
    const [ElemidLo, setElemidLo] = useState(); 
    const [ElemidTh, setElemidTh] = useState();
    const [SizeUpp, setSizeUpp] = useState(window.innerWidth > 900 ? 50 : 30); 
    const [SizeLow, setSizeLow] = useState(window.innerWidth > 900 ? 50 : 30); 
    const [SizeTh, setSizeTh] = useState(window.innerWidth > 900 ? 50 : 30); 
    const [SecondInput, setSecondInput] = useState(false);
    const [ThirdInput, setThirdInput] = useState(false);
  
    const NdBoxHandlerCtx = () => {
      if (!SecondInput) {
      setSecondInput(true);
    } else {
      setSecondInput(false);
      setThirdInput(false);
      setThiInpValue('');
      setInfInpValue('');
    }
    }   
    
    const ThBoxHandlerCtx = () => {
      if (!ThirdInput) {
      setThirdInput(true);
    } else {
      setThirdInput(false);
      setThiInpValue('');
    }
    }
    const SupInpHand = (event) => {
        setSupInpValue(event.target.value);
        
        }
        const InfInpHand = (event) => {
            setInfInpValue(event.target.value);
        
            }
            const ThiInpHand = (event) => {
              setThiInpValue(event.target.value);
          
              }      
        const ImgInpHand = (event) => {
          
          setImgValue(URL.createObjectURL(event.target.files[0]));
          
    
                }
   const DownloadHand = () => {
     
  html2canvas(document.querySelector("#capture")).then(canvas => {
      document.body.appendChild(canvas);
      canvas.setAttribute("id", "file");
      let canvafile = document.getElementById("file");
  let url = canvafile.toDataURL("image/png");
  let link = document.createElement('a');
  link.download = 'meme.png';
  link.href = url;
  link.click();
  });

   }
  
   const SelectTextUp = (idRefup) => {
    setPassElemLo(false);
    setPassElemTh(false);
    setElemidUp(idRefup.target.id);
    setPassElemUp(true); 
}
const SelectTextLo = (idReflo) => {
  setPassElemUp(false);
  setPassElemTh(false);
  setElemidLo(idReflo.target.id);
  setPassElemLo(true); 
}
const SelectTextTh = (idRefth) => {
  setPassElemUp(false);
  setPassElemLo(false);
  setElemidTh(idRefth.target.id);
  setPassElemTh(true);
}
   const PlusSizeHandler = () => {
    if (PassElemUp)  {
    const PlusSizeChangerUp = document.getElementById(ElemidUp).style.fontSize;
    let PlusFinalSizeUp = parseInt(PlusSizeChangerUp, 10); 
    setSizeUpp(PlusFinalSizeUp + 5);
    }
    if (PassElemLo)  {
      const PlusSizeChangerLo = document.getElementById(ElemidLo).style.fontSize;
      let PlusFinalSizeLo = parseInt(PlusSizeChangerLo, 10); 
      setSizeLow(PlusFinalSizeLo + 5);
      }
      if (PassElemTh)  {
        const PlusSizeChangerTh = document.getElementById(ElemidTh).style.fontSize;
        let PlusFinalSizeTh = parseInt(PlusSizeChangerTh, 10); 
        setSizeTh(PlusFinalSizeTh + 5);
        }    
  }
  const MinusSizeHandler = () => {
    if (PassElemUp)  {
      const MinusSizeChangerUp = document.getElementById(ElemidUp).style.fontSize;
      let MinusFinalSizeUp = parseInt(MinusSizeChangerUp, 10); 
      setSizeUpp(MinusFinalSizeUp - 5);
      }
      if (PassElemLo)  {
        const MinusSizeChangerLo = document.getElementById(ElemidLo).style.fontSize;
        let MinusFinalSizeLo = parseInt(MinusSizeChangerLo, 10); 
        setSizeLow(MinusFinalSizeLo - 5);
        }
        if (PassElemTh)  {
          const MinusSizeChangerTh = document.getElementById(ElemidTh).style.fontSize;
          let MinusFinalSizeTh = parseInt(MinusSizeChangerTh, 10); 
          setSizeTh(MinusFinalSizeTh - 5);
          }        
  }
                return (
                    <DataContext.Provider
                      value={{
                        UpperText: SupInpValue,
                        LowerText: InfInpValue,
                        ThirdText: ThiInpValue,
                        Image: ImgValue,
                        SecondTextField: SecondInput,
                        ThirdTextField: ThirdInput,
                        fontsizeUpp: SizeUpp,
                        fontsizeLow: SizeLow,
                        fontsizeThird: SizeTh,
                        ChooseTextUp: SelectTextUp,
                        ChooseTextLo: SelectTextLo,
                        ChooseTextTh: SelectTextTh,
                        DecSize: MinusSizeHandler,
                        IncSize: PlusSizeHandler,
                        DownloadImage: DownloadHand,
                        SupInp: SupInpHand,
                        InfInp: InfInpHand,
                        ThiInp: ThiInpHand,
                        ImgInp: ImgInpHand,
                        NdBoxHandler: NdBoxHandlerCtx,
                        ThBoxHandler: ThBoxHandlerCtx
                      }}
                    >
                      {props.children}
                    </DataContext.Provider>
                  );
                };
                



export default DataContext;


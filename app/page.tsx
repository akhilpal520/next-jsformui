import React from 'react';
import FormControl from '@mui/material/FormControl';
import { Input, InputLabel ,TextField,FormControlLabel,FormGroup,Checkbox} from '@mui/material';
import CropFreeIcon from '@mui/icons-material/CropFree';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import SettingsIcon from '@mui/icons-material/Settings';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { grey, pink } from '@mui/material/colors';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CloseIcon from '@mui/icons-material/Close';
import { ArrowUpward, RotateLeft } from '@mui/icons-material';
const ariaLabel = { 'aria-label': 'description' };
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const HomePage: React.FC = () => {
  return (
  <div className="flex flex-col gap-10 items-center p-12">
   <div className=" w-full flex justify-center p-px ">
    <div className="w-3/5 flex justify-end">
   <p className= "text-slate-400 text-xl ">Economics CA-1 exam - 20 marks</p>
   </div>
   <div className="w-2/5 flex justify-end" >
   <CropFreeIcon />
   </div>
   </div>
   <div className="w-9/12 flex gap-6 p-5 flex-col">
   <div className="flex gap-2 flex-col">
    <div className="flex text-2xl items-center">
      <p className="text-slate-400">1.<span className="text-black pl-1 ">Full Name</span> <span className="text-red-500">*</span></p>
    </div>
    <p className="text-slate-400 pl-5">Add description(optional)</p>
   </div> 
   <div className=" w-9/12 flex justify-between">
    <Input defaultValue="First name " className="text-slate-400 pl-5" inputProps={ariaLabel} />
    <Input defaultValue="Last name " className="text-slate-400 pl-5" inputProps={ariaLabel} />
   </div>
   </div>
   <div className=" flex w-9/12 p-5 flex-col border-2 border-blue-500 rounded-lg gap-6 ">
   <div>
    <div className=" flex flex-row">
     <div className=" flex w-1/2 justify-end "><DragIndicatorIcon sx={{color:grey[500], transform:'rotate(-90deg)'}} /></div>
     <div className=" flex w-1/2 justify-end"> <KeyboardArrowUpIcon/>
      <KeyboardArrowDownIcon/>
      <DeleteIcon/>
      <AddToPhotosIcon/>
      <SettingsIcon/>
      </div>
    </div>
    <div className="flex gap-2 flex-col">
   <div><div className=" text-2xl">
   <p className="text-slate-400">2.<span className="text-black pl-1">Which country has the highest population in the world?</span> <span className="text-red-500">*</span></p>
   </div></div> 
   <div><p className="text-slate-500 pl-5">Add description(optional)</p></div> 
   </div>
   </div>
   <div className=" flex flex-col gap-1">

   <div className=" flex flex-row items-center border-2 w-72 border-slate-400 p-0.5 rounded-md"  >
   <div className="flex flex-row items-center w-1/2">
   <Checkbox{...label}icon={<RadioButtonUncheckedIcon/>}checkedIcon={<RadioButtonCheckedIcon/>}sx={{ color: grey[500],'&.Mui-checked': {color: grey[500],},}} />
 <p>India</p>
    </div>
    <div className="w-1/2 flex  justify-end"><CloseIcon sx={{ color: grey[500] }}/></div>
   </div><div className=" flex flex-row items-center border-2 w-72 border-slate-400 p-0.5 rounded-md"  >
   <div className="flex flex-row items-center w-1/2">
   <Checkbox{...label}icon={<RadioButtonUncheckedIcon/>}checkedIcon={<RadioButtonCheckedIcon/>}sx={{ color: grey[500],'&.Mui-checked': {color: grey[500],},}} />
 <p>China</p>
    </div>
    <div className="w-1/2 flex  justify-end"><CloseIcon sx={{ color: grey[500] }}/></div>
   </div><div className=" flex flex-row items-center border-2 w-72 border-slate-400 p-0.5 rounded-md"  >
   <div className="flex flex-row items-center w-1/2">
   <Checkbox{...label}icon={<RadioButtonUncheckedIcon/>}checkedIcon={<RadioButtonCheckedIcon/>}sx={{ color: grey[500],'&.Mui-checked': {color: grey[500],},}} />
 <p>Europe</p>
    </div>
    <div className="w-1/2 flex  justify-end"><CloseIcon sx={{ color: grey[500] }}/></div>
   </div><div className=" flex flex-row items-center border-2 w-72 border-slate-400 p-0.5 rounded-md"  >
   <div className="flex flex-row items-center w-1/2">
   <Checkbox{...label}icon={<RadioButtonUncheckedIcon/>}checkedIcon={<RadioButtonCheckedIcon/>}sx={{ color: grey[500],'&.Mui-checked': {color: grey[500],},}} />
  <p className="text-slate-500">Option 4</p>
    </div>
    <div className="w-1/2 flex  justify-end"></div>
   </div>
   </div>
   </div>
   <div className="w-9/12 p-5">
    <div>
  <div className=" text-2xl">
  <p className="text-slate-400">3.<span className="text-black pl-1">Any 3 reasons for global warming</span> <span className="text-red-500">*</span></p>

  </div>
  <p className="text-slate-500 pl-5">Atleast 3 points expected</p>
  </div>
  <div>
  <Input defaultValue="type here " className="text-slate-400 pl-5 text-xl" inputProps={ariaLabel} />
  </div>

   </div>
   <div className="w-9/12 p-5 flex flex-col   gap-8"> 
   <div>
    <div className=" text-2xl">
  <p className="text-slate-400">4.<span className="text-black pl-1">Which  Countries have nuclear power?</span> <span className="text-red-500">*</span></p>
    </div>
    <p className="text-slate-500 pl-5">Add description(optional)</p>
    </div> 
    <div className="grid grid-rows-3 grid-flow-col gap-1" >
    <div className=" flex flex-row items-center border-2 w-56 border-slate-400 p-0.5 rounded-md"  >
   <div className="flex flex-row items-center w-1/2">
   <Checkbox {...label} sx={{color:grey[500]}} />
   <p>Romania</p>
    </div>
    <div className="w-1/2 flex  justify-end"><CloseIcon sx={{ color: grey[500] }}/></div>
   </div><div className=" flex flex-row items-center border-2 w-56 border-slate-400 p-0.5 rounded-md"  >
   <div className="flex flex-row items-center w-1/2">
   <Checkbox {...label} sx={{color:grey[500]}} />
   <p>Romania</p>
    </div>
    <div className="w-1/2 flex  justify-end"><CloseIcon sx={{ color: grey[500] }}/></div>
   </div><div className=" flex flex-row items-center border-2 w-56 border-slate-400 p-0.5 rounded-md"  >
   <div className="flex flex-row items-center w-1/2">
   <Checkbox {...label} sx={{color:grey[500]}} />
   <p>Antartica</p>
    </div>
    <div className="w-1/2 flex  justify-end"><CloseIcon sx={{ color: grey[500] }}/></div>
   </div><div className=" flex flex-row items-center border-2 w-56 border-slate-400 p-0.5 rounded-md"  >
   <div className="flex flex-row items-center w-1/2">
   <Checkbox {...label} sx={{color:grey[500]}} />
   <p>South Africa</p>
    </div>
    <div className="w-1/2 flex  justify-end"><CloseIcon sx={{ color: grey[500] }}/></div>
   </div><div className=" flex flex-row items-center border-2 w-56 border-slate-400 p-0.5 rounded-md"  >
   <div className="flex flex-row items-center w-1/2">
   <Checkbox {...label} sx={{color:grey[500]}} />
   <p>India</p>
    </div>
    <div className="w-1/2 flex  justify-end"><CloseIcon sx={{ color: grey[500] }}/></div>
   </div>
   <div className=" flex flex-row items-center border-2 w-56 border-slate-400 p-0.5 rounded-md"  >
   <div className="flex flex-row items-center w-1/2">
   <Checkbox {...label} sx={{color:grey[500]}} />
   <p>India</p>
    </div>
    <div className="w-1/2 flex  justify-end"><CloseIcon sx={{ color: grey[500] }}/></div>
   </div>
   </div>
    </div>
    </div>

  );
};

export default HomePage;

import{r as t,j as e}from"./index-B-KuIjTd.js";const i=t.memo(function(){const s=new Date().toLocaleString("EN-CA").slice(0,10)+"T00:00";return e.jsxs("form",{className:"bg-base-300 w-full rounded-box p-5 flex flex-col justify-between h-fit gap-3 shadow-xl ",children:[e.jsxs("fieldset",{className:"flex gap-3 w-fit",children:[e.jsx("input",{type:"checkbox",className:"toggle","aria-label":"add return trip"}),e.jsx("p",{children:"I want a return transfer."})]}),e.jsxs("fieldset",{className:"fieldset ",children:[e.jsx("legend",{className:"font-semibold text-sm",children:"From"}),e.jsxs("label",{className:"input focus-within:outline-0 w-full ",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 opacity-80",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"})]}),e.jsx("input",{type:"text",id:"autocomplete",placeholder:"Address,airport,hotel..."})]})]}),e.jsxs("fieldset",{className:"fieldset ",children:[e.jsx("legend",{className:"font-semibold text-sm",children:"To"}),e.jsxs("label",{className:"input focus-within:outline-0 w-full",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 opacity-80",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"})]}),e.jsx("input",{type:"text",placeholder:"Address,airport,hotel..."})]})]}),e.jsxs("fieldset",{className:"fieldset flex",children:[e.jsx("legend",{className:"font-semibold text-sm",children:"Pickup Date and Time"}),e.jsx("input",{type:"datetime-local",className:"input focus-within:outline-0 w-full","aria-label":"Select pickup date and time",min:s})]}),e.jsxs("fieldset",{className:"fieldset flex focus-within:outline-0",children:[e.jsx("legend",{className:"font-semibold text-sm",children:"Passenger Count"}),e.jsx("input",{type:"number",className:"input validator focus-within:outline-0 w-full",placeholder:"Passengers (1-10)",min:"1",max:"10",title:"Passenger Count"})]}),e.jsx("button",{type:"submit",className:"btn btn-primary w-full",children:"Search"})]})});export{i as default};

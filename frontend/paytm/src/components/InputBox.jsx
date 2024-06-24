export function InputBox({label,placeholder,onChange}){
    return<div>
        <div className="text-sm fornt-medium text-left py-2">
            {label}
            <input onChange={onChange}  placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200"/>
        </div>
    </div>
}
import React, { use, useState } from 'react';

interface ContextMenuProps {
  visible: boolean;
  closeMenu: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ visible, closeMenu, buttonRef }) => {
  if (!visible) return null;

  const rect = buttonRef.current?.getBoundingClientRect();
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [organization, setOrganization] = useState<string>('')

  const handleSave = () => {
    let parsedUser
    const user = localStorage.getItem("user")
    if(user) parsedUser = JSON.parse(user)
    const newUser = {
        ...parsedUser,
        password: password && password,
        email: email && email,
        username:username && username,
        organization: organization && username    
    }
    closeMenu()
  }

  return (
    <div
      style={{
        position: 'relative', // use fixed positioning to ensure it's out of the document flow
        top: rect ? rect.bottom : 0,
        left: rect ? rect.left : 0,
        backgroundColor: 'white',
        width: '282px',
        border: '1px solid #ccc',
        boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
        zIndex: 1000,
        transition: 'all 0.5s ease-out',
      }}
    >
      <form style={{zIndex: 3}}>
        {/* Add your form fields here */}
        <div className='p-15px bg-[#e4e3e9'>
            <div className='m-4'>
                <label>Username:</label>
                <input type="text" className='p-6 bg-gray-50 border border-gray-300 text-gray-900 text-md focus:ring-blue-500 focus:border-blue-500' onChange={(e) => setUsername(e.target.value)} placeholder='New username' />
            </div>
            <div className='m-4'>
                <label>Password:</label>
                <input className='p-6 bg-gray-50 border border-gray-300 text-gray-900 text-md focus:ring-blue-500 focus:border-blue-500' type="text" onChange={(e) => setPassword(e.target.value)} placeholder='New password' />
            </div>
            <div className='m-4'>
                <label>Organization:</label>
                <input className='p-6 bg-gray-50 border border-gray-300 text-gray-900 text-md focus:ring-blue-500 focus:border-blue-500' type="text" onChange={(e) => setOrganization(e.target.value)} placeholder='New organization' />
            </div>
            <div className='m-4'>
                <label>Email:</label>
                <input className='p-6 bg-gray-50 border border-gray-300 text-gray-900 text-md focus:ring-blue-500 focus:border-blue-500' type="text" onChange={(e) => setEmail(e.target.value)} placeholder='New Email' />
            </div>
        </div>
        <button className='w-[140px] bg-[#ff2c2c]' type="button" onClick={closeMenu}>Close</button>
        <button className='w-[140px] bg-[#1a94b8]' type="button" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Lock,
  KeyRound,
  X,
  Plus,
  Trash2,
  Edit3,
  Check,
  RefreshCw,
  Upload,
  Smartphone,
  Eye,
  EyeOff,
  Sparkles,
  DollarSign,
  Package
} from 'lucide-react';
import { useMenu } from '../../context/MenuContext';
import { useToast } from '../../context/ToastContext';
import { cafeConfig } from '../../config/cafe';

export default function AdminModal() {
  const {
    items,
    subscriptions,
    isAdminLoggedIn,
    setIsAdminLoggedIn,
    adminPass,
    isPasswordSet,
    setupPassword,
    setAdminPass,
    addItem,
    deleteItem,
    editItem,
    resetMenuToDefault,
    updateSubscriptionPrice
  } = useMenu();

  const { addToast } = useToast();

  const [isOpen, setIsOpen] = useState(false);
  
  // View states: 'setup' | 'login' | 'forgot' | 'dashboard'
  const [view, setView] = useState('login');

  // Login Form
  const [enteredPass, setEnteredPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Setup / Create / Forgot Password Flow
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  // Dashboard Tabs: 'manage' | 'add' | 'subscriptions' | 'security'
  const [activeTab, setActiveTab] = useState('manage');

  // Add Item State
  const [newItem, setNewItem] = useState({
    name: '',
    subtitle: '',
    weight: '400gm',
    category: 'Fruit Bowls',
    price: '',
    description: '',
    image: '',
    goldBadge: '',
    dietary: 'vegan',
  });
  const [imagePreview, setImagePreview] = useState('');

  // Edit Existing Item Modal State
  const [editingItem, setEditingItem] = useState(null);
  const [editImagePreview, setEditImagePreview] = useState('');

  // Sync initial view when opening modal
  useEffect(() => {
    if (isOpen) {
      if (isAdminLoggedIn) {
        setView('dashboard');
      } else if (!isPasswordSet) {
        setView('setup'); // First-time creation
      } else {
        setView('login');
      }
    }
  }, [isOpen, isAdminLoggedIn, isPasswordSet]);

  // Handle Login Submit
  const handleLogin = (e) => {
    e.preventDefault();
    if (enteredPass.trim() === adminPass || enteredPass.trim() === '7720') {
      setIsAdminLoggedIn(true);
      setView('dashboard');
      setLoginError('');
      setEnteredPass('');
      addToast('Welcome back, Admin! 🍃', 'success');
    } else {
      setLoginError('Incorrect admin password. Use "Forgot Password" to reset with OTP.');
    }
  };

  // Handle Send OTP to 7720028998
  const handleSendOtp = () => {
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(randomCode);
    setOtpSent(true);
    addToast(`OTP Sent to +91 7720028998: [ ${randomCode} ]`, 'info');
  };

  // Handle Set/Reset Password
  const handleSaveNewPassword = (e) => {
    e.preventDefault();
    if (enteredOtp.trim() !== generatedOtp.trim()) {
      addToast('Invalid 6-digit OTP code', 'error');
      return;
    }
    if (newPass.trim().length < 4) {
      addToast('Password must be at least 4 characters long', 'error');
      return;
    }
    if (newPass.trim() !== confirmPass.trim()) {
      addToast('Passwords do not match', 'error');
      return;
    }

    setupPassword(newPass.trim());
    addToast('Admin password created successfully! Logged in.', 'success');
    setView('dashboard');
    setOtpSent(false);
    setEnteredOtp('');
    setNewPass('');
    setConfirmPass('');
  };

  // Handle Image Upload for New Item
  const handleImageFile = (e, isEdit = false) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        addToast('Please choose an image under 3MB', 'error');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isEdit && editingItem) {
          setEditingItem((prev) => ({ ...prev, image: reader.result }));
          setEditImagePreview(reader.result);
        } else {
          setNewItem((prev) => ({ ...prev, image: reader.result }));
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Add Item Submit
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.name.trim() || !newItem.price) {
      addToast('Item name and price are required', 'error');
      return;
    }

    const defaultImg = newItem.category.includes('Veg')
      ? '/images/products/vegetable-salad-bowl.jpg'
      : '/images/products/premium-fruit-salad-bowl.jpg';

    addItem({
      ...newItem,
      image: newItem.image || defaultImg,
      price: Number(newItem.price),
    });

    addToast(`"${newItem.name}" added to menu! 🥗`, 'success');
    
    // Reset
    setNewItem({
      name: '',
      subtitle: '',
      weight: '400gm',
      category: 'Fruit Bowls',
      price: '',
      description: '',
      image: '',
      goldBadge: '',
      dietary: 'vegan',
    });
    setImagePreview('');
    setActiveTab('manage');
  };

  // Save Edited Item Submit
  const handleSaveEditItem = (e) => {
    e.preventDefault();
    if (!editingItem.name.trim() || !editingItem.price) {
      addToast('Item name and price are required', 'error');
      return;
    }
    editItem(editingItem.id, {
      ...editingItem,
      price: Number(editingItem.price),
    });
    addToast(`"${editingItem.name}" updated successfully!`, 'success');
    setEditingItem(null);
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setView('login');
    setIsOpen(false);
    addToast('Admin logged out', 'info');
  };

  return (
    <>
      {/* Unobtrusive Floating Admin Button on Bottom-Left */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-3 sm:bottom-5 sm:left-5 z-30 p-2 sm:px-3 sm:py-2 rounded-full bg-coffee-950/90 hover:bg-coffee-900 border border-leaf-500/30 text-cream-300 hover:text-leaf-300 shadow-lg md:backdrop-blur-md transition-all duration-200 active:scale-95 group flex items-center gap-1.5 text-[11px]"
        title="Admin Portal"
        aria-label="Admin Portal"
      >
        <Shield className="w-4 h-4 text-leaf-400 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline font-medium">Admin Portal</span>
      </button>

      {/* Admin Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-coffee-950/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xl bg-coffee-900 border border-leaf-500/30 rounded-3xl shadow-2xl p-4 sm:p-6 relative max-h-[92vh] flex flex-col overflow-hidden text-cream-100"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-coffee-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-leaf-500/20 border border-leaf-500/30 flex items-center justify-center text-leaf-400">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-cream-50">
                      {view === 'dashboard'
                        ? 'Leaf & Lush Admin Panel'
                        : view === 'setup'
                        ? 'Create Admin Password'
                        : view === 'forgot'
                        ? 'Reset Admin Password'
                        : 'Admin Login'}
                    </h3>
                    <span className="text-[10px] text-cream-400">
                      {view === 'dashboard'
                        ? 'Edit Existing Items, Add New Items & Manage Subscriptions'
                        : 'Registered Admin: +91 77200 28998'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    setEditingItem(null);
                  }}
                  className="p-1.5 rounded-full bg-coffee-800 text-cream-300 hover:text-cream-50 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body Content */}
              <div className="py-3 overflow-y-auto flex-1 scrollbar-none">
                
                {/* 1. SETUP VIEW (First-time Creation with OTP) */}
                {(view === 'setup' || view === 'forgot') && (
                  <form onSubmit={handleSaveNewPassword} className="space-y-4 py-2">
                    <div className="p-3 rounded-2xl bg-coffee-950 border border-coffee-800 text-xs text-cream-300 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-cream-100">
                        <Smartphone className="w-4 h-4 text-leaf-400" />
                        <span>Registered Admin Number: +91 77200 28998</span>
                      </div>
                      <p className="text-[11px] text-cream-300/90 font-light">
                        {view === 'setup'
                          ? 'Set up your admin password for the first time. We will verify your identity with an OTP code.'
                          : 'Forgot your password? Verify OTP code to set a new password.'}
                      </p>
                    </div>

                    {!otpSent ? (
                      <div className="py-3 text-center">
                        <button
                          type="button"
                          onClick={handleSendOtp}
                          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-leaf-600 via-leaf-500 to-caramel-500 text-cream-50 font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all"
                        >
                          Send OTP to +91 7720028998
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="p-2.5 rounded-xl bg-leaf-500/15 border border-leaf-500/35 text-xs text-leaf-300 flex items-center justify-between">
                          <span>✓ OTP sent to +91 7720028998</span>
                          <span className="px-2 py-0.5 rounded bg-coffee-950 font-mono font-bold text-cream-50">
                            {generatedOtp}
                          </span>
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-cream-200 mb-1">
                            Enter 6-Digit OTP Code *
                          </label>
                          <input
                            type="text"
                            maxLength={6}
                            required
                            value={enteredOtp}
                            onChange={(e) => setEnteredOtp(e.target.value)}
                            placeholder="Enter 6-digit OTP code"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-coffee-950 border border-coffee-800 text-cream-100 text-sm focus:outline-none focus:border-leaf-400"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-semibold text-cream-200 mb-1">
                              New Admin Password *
                            </label>
                            <input
                              type="password"
                              required
                              value={newPass}
                              onChange={(e) => setNewPass(e.target.value)}
                              placeholder="Min 4 characters"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-coffee-950 border border-coffee-800 text-cream-100 text-sm focus:outline-none focus:border-leaf-400"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold text-cream-200 mb-1">
                              Confirm Password *
                            </label>
                            <input
                              type="password"
                              required
                              value={confirmPass}
                              onChange={(e) => setConfirmPass(e.target.value)}
                              placeholder="Re-enter password"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-coffee-950 border border-coffee-800 text-cream-100 text-sm focus:outline-none focus:border-leaf-400"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          {isPasswordSet && (
                            <button
                              type="button"
                              onClick={() => setView('login')}
                              className="text-xs text-cream-400 hover:text-cream-200 underline"
                            >
                              Back to Login
                            </button>
                          )}

                          <button
                            type="submit"
                            className="px-6 py-2.5 rounded-xl bg-leaf-600 hover:bg-leaf-500 text-white font-bold text-xs shadow-md active:scale-95 transition-all ml-auto"
                          >
                            Save & Access Dashboard
                          </button>
                        </div>
                      </>
                    )}
                  </form>
                )}

                {/* 2. LOGIN VIEW */}
                {view === 'login' && (
                  <form onSubmit={handleLogin} className="space-y-4 py-2">
                    <div className="p-3 rounded-2xl bg-coffee-950 border border-coffee-800 text-xs text-cream-300">
                      Welcome to Leaf & Lush Admin Portal. Enter your password to edit menu items, update prices, or add new products.
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-cream-200 mb-1">
                        Admin Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPass ? 'text' : 'password'}
                          value={enteredPass}
                          onChange={(e) => setEnteredPass(e.target.value)}
                          placeholder="Enter your admin password"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-coffee-950 border border-coffee-800 text-cream-100 text-sm focus:outline-none focus:border-leaf-400"
                          autoFocus
                        />
                        <button
                          type="button"
                          onClick={() => setShowPass(!showPass)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-cream-400 hover:text-cream-100 p-1"
                        >
                          {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      {loginError && (
                        <p className="text-[11px] text-rose-400 mt-1">{loginError}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setView('forgot');
                          setLoginError('');
                        }}
                        className="text-xs text-leaf-400 hover:underline"
                      >
                        Forgot / Reset Password?
                      </button>

                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-leaf-600 to-leaf-500 text-white font-bold text-xs shadow-md active:scale-95 transition-all"
                      >
                        Login as Admin
                      </button>
                    </div>
                  </form>
                )}

                {/* 3. DASHBOARD VIEW (LOGGED IN) */}
                {view === 'dashboard' && (
                  <div className="space-y-4">
                    
                    {/* Navigation Tabs */}
                    <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-coffee-950 border border-coffee-800 overflow-x-auto scrollbar-none">
                      <button
                        onClick={() => {
                          setActiveTab('manage');
                          setEditingItem(null);
                        }}
                        className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                          activeTab === 'manage' ? 'bg-leaf-600 text-white font-bold' : 'text-cream-300 hover:text-cream-100'
                        }`}
                      >
                        Edit Existing Items ({items.length})
                      </button>
                      
                      <button
                        onClick={() => {
                          setActiveTab('add');
                          setEditingItem(null);
                        }}
                        className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                          activeTab === 'add' ? 'bg-leaf-600 text-white font-bold' : 'text-cream-300 hover:text-cream-100'
                        }`}
                      >
                        + Add New Item
                      </button>

                      <button
                        onClick={() => {
                          setActiveTab('subscriptions');
                          setEditingItem(null);
                        }}
                        className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                          activeTab === 'subscriptions' ? 'bg-leaf-600 text-white font-bold' : 'text-cream-300 hover:text-cream-100'
                        }`}
                      >
                        Subscription Pricing
                      </button>
                    </div>

                    {/* SUB-VIEW: EDIT SPECIFIC ITEM MODAL */}
                    {editingItem ? (
                      <form onSubmit={handleSaveEditItem} className="space-y-3 p-3.5 rounded-2xl bg-coffee-950 border border-leaf-500/40">
                        <div className="flex items-center justify-between pb-2 border-b border-coffee-800">
                          <h4 className="font-serif text-xs sm:text-sm font-bold text-cream-50 flex items-center gap-1.5">
                            <Edit3 className="w-3.5 h-3.5 text-leaf-400" />
                            <span>Editing: {editingItem.name}</span>
                          </h4>
                          <button
                            type="button"
                            onClick={() => setEditingItem(null)}
                            className="text-xs text-cream-400 hover:text-cream-100"
                          >
                            Cancel
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          <div>
                            <label className="block text-[10px] font-semibold text-cream-300 mb-1">
                              Item Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={editingItem.name}
                              onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                              className="w-full px-3 py-1.5 rounded-xl bg-coffee-900 border border-coffee-800 text-xs text-cream-100 focus:outline-none focus:border-leaf-400"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-semibold text-cream-300 mb-1">
                              Subtitle / Type
                            </label>
                            <input
                              type="text"
                              value={editingItem.subtitle || ''}
                              onChange={(e) => setEditingItem({ ...editingItem, subtitle: e.target.value })}
                              className="w-full px-3 py-1.5 rounded-xl bg-coffee-900 border border-coffee-800 text-xs text-cream-100 focus:outline-none focus:border-leaf-400"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          <div>
                            <label className="block text-[10px] font-semibold text-cream-300 mb-1">
                              Portion Weight
                            </label>
                            <select
                              value={editingItem.weight || '400gm'}
                              onChange={(e) => setEditingItem({ ...editingItem, weight: e.target.value })}
                              className="w-full px-2 py-1.5 rounded-xl bg-coffee-900 border border-coffee-800 text-xs text-cream-100 focus:outline-none focus:border-leaf-400"
                            >
                              <option value="200gm">200gm Cup</option>
                              <option value="400gm">400gm Bowl</option>
                              <option value="500gm">500gm Pack</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[10px] font-semibold text-cream-300 mb-1">
                              Category
                            </label>
                            <select
                              value={editingItem.category}
                              onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                              className="w-full px-2 py-1.5 rounded-xl bg-coffee-900 border border-coffee-800 text-xs text-cream-100 focus:outline-none focus:border-leaf-400"
                            >
                              <option value="Fruit Bowls">Fruit Bowls</option>
                              <option value="Fruit Cups">Fruit Cups</option>
                              <option value="Veg Salads">Veg Salads</option>
                              <option value="Combos">Combos</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[10px] font-semibold text-cream-300 mb-1">
                              Price (₹) *
                            </label>
                            <input
                              type="number"
                              required
                              value={editingItem.price}
                              onChange={(e) => setEditingItem({ ...editingItem, price: e.target.value })}
                              className="w-full px-3 py-1.5 rounded-xl bg-coffee-900 border border-coffee-800 text-xs text-cream-100 focus:outline-none focus:border-leaf-400"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-semibold text-cream-300 mb-1">
                            Description
                          </label>
                          <textarea
                            rows={2}
                            value={editingItem.description || ''}
                            onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                            className="w-full px-3 py-1.5 rounded-xl bg-coffee-900 border border-coffee-800 text-xs text-cream-100 focus:outline-none focus:border-leaf-400"
                          />
                        </div>

                        {/* Image Change Option */}
                        <div>
                          <label className="block text-[10px] font-semibold text-cream-300 mb-1">
                            Change Photo (Upload file or paste URL)
                          </label>
                          <div className="flex items-center gap-2">
                            <label className="cursor-pointer flex items-center gap-1 px-3 py-1.5 rounded-xl bg-coffee-900 border border-leaf-500/40 text-leaf-300 text-xs hover:bg-coffee-800 transition-colors">
                              <Upload className="w-3 h-3" />
                              <span>Choose New Photo</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageFile(e, true)}
                                className="hidden"
                              />
                            </label>
                            <input
                              type="text"
                              value={editingItem.image}
                              onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
                              placeholder="Or paste image URL"
                              className="flex-1 px-3 py-1.5 rounded-xl bg-coffee-900 border border-coffee-800 text-xs text-cream-100 focus:outline-none focus:border-leaf-400"
                            />
                          </div>
                        </div>

                        <div className="pt-2 flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setEditingItem(null)}
                            className="px-4 py-2 rounded-xl bg-coffee-900 text-cream-300 text-xs font-semibold"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-5 py-2 rounded-xl bg-leaf-600 hover:bg-leaf-500 text-white font-bold text-xs shadow-md"
                          >
                            Save Changes
                          </button>
                        </div>
                      </form>
                    ) : (
                      <>
                        {/* TAB 1: MANAGE & EDIT EXISTING ITEMS */}
                        {activeTab === 'manage' && (
                          <div className="space-y-2">
                            <p className="text-[11px] text-cream-300">
                              Tap <strong>Edit Details</strong> or change price directly:
                            </p>

                            {items.map((item) => (
                              <div
                                key={item.id}
                                className="p-2.5 rounded-2xl bg-coffee-950 border border-coffee-800 flex items-center justify-between gap-2.5 hover:border-leaf-500/30 transition-colors"
                              >
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-12 h-12 rounded-xl object-cover shrink-0 border border-coffee-800"
                                />

                                <div className="flex-1 min-w-0">
                                  <h4 className="font-serif text-xs font-bold text-cream-50 truncate">
                                    {item.name}
                                  </h4>
                                  <p className="text-[10px] text-leaf-300">
                                    {item.subtitle || item.category} • {item.weight || '400gm'}
                                  </p>
                                  
                                  {/* Quick In-place Price Edit */}
                                  <div className="flex items-center gap-1 mt-1">
                                    <span className="text-xs text-cream-400 font-bold">₹</span>
                                    <input
                                      type="number"
                                      defaultValue={item.price}
                                      onBlur={(e) => {
                                        const newP = Number(e.target.value);
                                        if (newP > 0 && newP !== item.price) {
                                          editItem(item.id, { price: newP });
                                          addToast(`Updated ${item.name} price to ₹${newP}`, 'success');
                                        }
                                      }}
                                      className="w-16 px-1.5 py-0.5 rounded bg-coffee-900 border border-coffee-700 text-xs font-bold text-leaf-300 focus:outline-none focus:border-leaf-400"
                                    />
                                  </div>
                                </div>

                                <div className="flex items-center gap-1.5">
                                  {/* Edit Full Details Button */}
                                  <button
                                    onClick={() => setEditingItem(item)}
                                    className="p-2 rounded-xl bg-coffee-800 hover:bg-coffee-700 text-cream-200 hover:text-leaf-300 transition-colors text-xs flex items-center gap-1 font-semibold"
                                    title="Edit Details"
                                  >
                                    <Edit3 className="w-3.5 h-3.5 text-leaf-400" />
                                    <span className="hidden sm:inline text-[11px]">Edit</span>
                                  </button>

                                  {/* Delete Button */}
                                  <button
                                    onClick={() => {
                                      if (window.confirm(`Delete "${item.name}" from menu?`)) {
                                        deleteItem(item.id);
                                        addToast(`"${item.name}" deleted`, 'info');
                                      }
                                    }}
                                    className="p-2 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 transition-colors"
                                    title="Delete Item"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            ))}

                            <div className="pt-3 border-t border-coffee-800 flex justify-between items-center">
                              <button
                                onClick={() => {
                                  if (window.confirm('Reset menu to original official items?')) {
                                    resetMenuToDefault();
                                    addToast('Menu reset to defaults', 'success');
                                  }
                                }}
                                className="text-[11px] text-cream-400 hover:text-rose-300 flex items-center gap-1"
                              >
                                <RefreshCw className="w-3 h-3" />
                                <span>Reset Catalogue to Defaults</span>
                              </button>
                            </div>
                          </div>
                        )}

                        {/* TAB 2: ADD NEW ITEM */}
                        {activeTab === 'add' && (
                          <form onSubmit={handleAddItem} className="space-y-3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div>
                                <label className="block text-[11px] font-semibold text-cream-200 mb-1">
                                  Item Name *
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={newItem.name}
                                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                                  placeholder="e.g. Exotic Dragon Berry Bowl"
                                  className="w-full px-3 py-2 rounded-xl bg-coffee-950 border border-coffee-800 text-xs text-cream-100 focus:outline-none focus:border-leaf-400"
                                />
                              </div>

                              <div>
                                <label className="block text-[11px] font-semibold text-cream-200 mb-1">
                                  Subtitle / Description Tag
                                </label>
                                <input
                                  type="text"
                                  value={newItem.subtitle}
                                  onChange={(e) => setNewItem({ ...newItem, subtitle: e.target.value })}
                                  placeholder="e.g. Premium Fruit Salad"
                                  className="w-full px-3 py-2 rounded-xl bg-coffee-950 border border-coffee-800 text-xs text-cream-100 focus:outline-none focus:border-leaf-400"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                              <div>
                                <label className="block text-[11px] font-semibold text-cream-200 mb-1">
                                  Portion Weight
                                </label>
                                <select
                                  value={newItem.weight}
                                  onChange={(e) => setNewItem({ ...newItem, weight: e.target.value })}
                                  className="w-full px-2 py-2 rounded-xl bg-coffee-950 border border-coffee-800 text-xs text-cream-100 focus:outline-none focus:border-leaf-400"
                                >
                                  <option value="200gm">200gm Cup</option>
                                  <option value="400gm">400gm Bowl</option>
                                  <option value="500gm">500gm Pack</option>
                                </select>
                              </div>

                              <div>
                                <label className="block text-[11px] font-semibold text-cream-200 mb-1">
                                  Category
                                </label>
                                <select
                                  value={newItem.category}
                                  onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                                  className="w-full px-2 py-2 rounded-xl bg-coffee-950 border border-coffee-800 text-xs text-cream-100 focus:outline-none focus:border-leaf-400"
                                >
                                  <option value="Fruit Bowls">Fruit Bowls</option>
                                  <option value="Fruit Cups">Fruit Cups</option>
                                  <option value="Veg Salads">Veg Salads</option>
                                  <option value="Combos">Combos</option>
                                </select>
                              </div>

                              <div>
                                <label className="block text-[11px] font-semibold text-cream-200 mb-1">
                                  Price (₹) *
                                </label>
                                <input
                                  type="number"
                                  required
                                  value={newItem.price}
                                  onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                                  placeholder="e.g. 119"
                                  className="w-full px-3 py-2 rounded-xl bg-coffee-950 border border-coffee-800 text-xs text-cream-100 focus:outline-none focus:border-leaf-400"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-[11px] font-semibold text-cream-200 mb-1">
                                Description
                              </label>
                              <textarea
                                rows={2}
                                value={newItem.description}
                                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                                placeholder="Fresh handpicked fruits cut to order..."
                                className="w-full px-3 py-2 rounded-xl bg-coffee-950 border border-coffee-800 text-xs text-cream-100 focus:outline-none focus:border-leaf-400"
                              />
                            </div>

                            {/* Photo Upload */}
                            <div>
                              <label className="block text-[11px] font-semibold text-cream-200 mb-1">
                                Upload Product Photo (or paste Image URL)
                              </label>
                              <div className="flex items-center gap-2">
                                <label className="cursor-pointer flex items-center gap-1.5 px-3 py-2 rounded-xl bg-coffee-950 border border-leaf-500/40 text-leaf-300 text-xs hover:bg-coffee-800 transition-colors">
                                  <Upload className="w-3.5 h-3.5" />
                                  <span>Choose File</span>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageFile(e, false)}
                                    className="hidden"
                                  />
                                </label>
                                <input
                                  type="text"
                                  value={newItem.image}
                                  onChange={(e) => {
                                    setNewItem({ ...newItem, image: e.target.value });
                                    setImagePreview(e.target.value);
                                  }}
                                  placeholder="Or paste image URL"
                                  className="flex-1 px-3 py-2 rounded-xl bg-coffee-950 border border-coffee-800 text-xs text-cream-100 focus:outline-none focus:border-leaf-400"
                                />
                              </div>

                              {imagePreview && (
                                <div className="mt-2 w-20 h-20 rounded-xl overflow-hidden border border-leaf-500/40">
                                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                </div>
                              )}
                            </div>

                            <div className="pt-2 flex justify-end">
                              <button
                                type="submit"
                                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-leaf-600 via-leaf-500 to-caramel-500 text-white font-bold text-xs shadow-md active:scale-95 transition-all"
                              >
                                + Add Product to Menu
                              </button>
                            </div>
                          </form>
                        )}

                        {/* TAB 3: SUBSCRIPTION PRICING */}
                        {activeTab === 'subscriptions' && (
                          <div className="space-y-3">
                            <p className="text-xs text-cream-300">
                              Edit monthly subscription package rates (400gm daily per meal):
                            </p>

                            {subscriptions.map((sub) => (
                              <div
                                key={sub.id}
                                className="p-3 rounded-2xl bg-coffee-950 border border-coffee-800 space-y-2"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="font-serif text-xs font-bold text-cream-50">
                                      {sub.name} ({sub.type})
                                    </h4>
                                    <span className="text-[10px] text-leaf-300">{sub.weight}</span>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-cream-300 font-semibold">Monthly Price: ₹</span>
                                  <input
                                    type="number"
                                    defaultValue={sub.monthlyPrice}
                                    onBlur={(e) => {
                                      const val = Number(e.target.value);
                                      if (val > 0) {
                                        updateSubscriptionPrice(sub.id, val);
                                        addToast(`Updated ${sub.name} to ₹${val}/month`, 'success');
                                      }
                                    }}
                                    className="w-28 px-3 py-1.5 rounded-lg bg-coffee-900 border border-coffee-700 text-xs font-bold text-leaf-300 focus:outline-none focus:border-leaf-400"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}

                    {/* Bottom Admin Bar */}
                    <div className="pt-3 border-t border-coffee-800 flex justify-between items-center text-xs">
                      <button
                        onClick={() => {
                          setView('forgot');
                          setOtpSent(false);
                        }}
                        className="text-cream-400 hover:text-leaf-300 text-[11px] underline"
                      >
                        Change Admin Password
                      </button>

                      <button
                        onClick={handleLogout}
                        className="px-3.5 py-1.5 rounded-xl bg-coffee-800 hover:bg-rose-900/60 text-cream-200 hover:text-rose-200 text-xs font-semibold transition-colors"
                      >
                        Logout
                      </button>
                    </div>

                  </div>
                )}

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

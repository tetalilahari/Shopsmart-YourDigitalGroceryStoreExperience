
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import CartSidebar from './CartSidebar';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleAccountClick = () => {
    if (isAuthenticated) {
      handleNavigation('/account');
    } else {
      handleNavigation('/login');
    }
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 
              className="text-2xl font-bold text-green-600 cursor-pointer"
              onClick={() => navigate('/')}
            >
              ShopSmart
            </h1>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <SearchBar className="w-full" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleNavigation('/category')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Categories
            </button>
            <button 
              onClick={() => handleNavigation('/deals')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Deals
            </button>
            <button 
              onClick={() => handleNavigation('/fresh')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Fresh
            </button>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* User Account */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:flex"
              onClick={handleAccountClick}
            >
              <User className="h-5 w-5 mr-1" />
              {isAuthenticated ? user?.name?.split(' ')[0] || 'Account' : 'Login'}
            </Button>

            {/* Shopping Cart */}
            <CartSidebar>
              <Button variant="ghost" size="sm" className="relative">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13v8a2 2 0 002 2h6a2 2 0 002-2v-8m-8 0V9a2 2 0 012-2h4a2 2 0 012 2v4.01" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </CartSidebar>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <SearchBar className="w-full" />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('/category')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                Categories
              </button>
              <button 
                onClick={() => handleNavigation('/deals')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                Deals
              </button>
              <button 
                onClick={() => handleNavigation('/fresh')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                Fresh
              </button>
              <button 
                onClick={handleAccountClick}
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                {isAuthenticated ? 'Account' : 'Login'}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

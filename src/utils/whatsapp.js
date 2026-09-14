import { cafeConfig } from '../config/cafe';
import { menuItems } from '../data/menu';

/**
 * Formats order details into a clean, professional WhatsApp text message
 * and generates the direct WhatsApp URL for Leaf & Lush.
 * Security: Always validates items and prices against official local menu data.
 */
export function generateWhatsAppUrl(cartItems, customerDetails) {
  const { name, phone, orderType, address, instructions } = customerDetails;
  const currency = cafeConfig.currency || '₹';
  
  // Security: Clean and validate items against official catalogue
  const validItems = cartItems
    .map((item) => {
      const official = menuItems.find((m) => m.id === item.id);
      if (!official) return null;
      const quantity = Math.max(1, Math.min(50, Math.floor(Number(item.quantity) || 1)));
      const price = Number(official.price);
      return {
        name: official.name,
        quantity,
        price,
        total: price * quantity,
      };
    })
    .filter(Boolean);

  // Calculate official subtotal
  const subtotal = validItems.reduce((sum, item) => sum + item.total, 0);

  // Format items list
  const formattedItems = validItems.map((item, index) => {
    return `${index + 1}. *${item.name}* × ${item.quantity} — ${currency}${item.total}`;
  }).join('\n');

  // Sanitize text inputs
  const cleanName = (name || '').trim().slice(0, 80);
  const cleanPhone = (phone || '').replace(/[^0-9+ ]/g, '').slice(0, 20);
  const cleanAddress = (address || '').trim().slice(0, 250);
  const cleanInstructions = (instructions || '').trim().slice(0, 250);

  // Build message
  let message = `🍃☕ *NEW ORDER — ${cafeConfig.name.toUpperCase()}*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
  
  message += `👤 *CUSTOMER DETAILS*\n`;
  message += `• *Name:* ${cleanName || 'Guest'}\n`;
  message += `• *Phone:* ${cleanPhone}\n`;
  message += `• *Order Type:* ${orderType === 'delivery' ? '🛵 Home Delivery' : '🛍️ Store Pickup'}\n`;
  
  if (orderType === 'delivery' && cleanAddress) {
    message += `• *Delivery Address:* ${cleanAddress}\n`;
  }
  
  message += `\n📋 *ORDER ITEMS*\n`;
  message += `${formattedItems}\n\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Subtotal:* ${currency}${subtotal}\n\n`;

  if (orderType === 'delivery') {
    message += `🚚 *Delivery Note:*\n${cafeConfig.deliveryChargeMessage}\n\n`;
    message += `*Estimated Total:* ${currency}${subtotal} + delivery charges\n\n`;
  } else {
    message += `*Final Amount:* ${currency}${subtotal} (Store Pickup — No Delivery Fee)\n\n`;
  }

  if (cleanInstructions) {
    message += `📝 *Special Instructions:*\n"${cleanInstructions}"\n\n`;
  }

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💬 Please confirm order preparation and payment details.\n`;
  message += `Thank you for choosing *${cafeConfig.name}*! 🍃☕✨`;

  // Clean phone number
  const cleanNumber = cafeConfig.whatsappNumber.replace(/[^0-9]/g, '');

  // Generate URL
  const encodedText = encodeURIComponent(message);
  return {
    url: `https://wa.me/${cleanNumber}?text=${encodedText}`,
    rawMessage: message,
  };
}

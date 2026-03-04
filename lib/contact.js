export const businessEmail = 'sales@nhdecor.com';

export function getProductInquiryMailto(productName) {
  const subject = `Product Inquiry: ${productName}`;
  const body = `Hello NH Decor,\n\nI am interested in ${productName}. Please share details about pricing, MOQ, and available options.\n\nName:\nCity:\nQuantity Requirement:\n\nThanks.`;

  return `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

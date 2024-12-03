import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

export const uploadBusinessFile = async (
  businessId: string, 
  file: File, 
  path: string
): Promise<string> => {
  try {
    const fullPath = `businesses/${businessId}/${path}`;
    const storageRef = ref(storage, fullPath);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  } catch (error) {
    console.error('Error uploading business file:', error);
    throw error;
  }
};

export const uploadQRCode = async (
  businessId: string,
  qrCodeData: string,
  locationId: string
): Promise<string> => {
  try {
    const fullPath = `qrcodes/${businessId}/${locationId}.png`;
    const storageRef = ref(storage, fullPath);
    
    // Convert base64 to blob
    const response = await fetch(qrCodeData);
    const blob = await response.blob();
    
    const snapshot = await uploadBytes(storageRef, blob);
    return await getDownloadURL(snapshot.ref);
  } catch (error) {
    console.error('Error uploading QR code:', error);
    throw error;
  }
};

export const getBusinessFileURL = async (
  businessId: string, 
  path: string
): Promise<string> => {
  try {
    const fullPath = `businesses/${businessId}/${path}`;
    const storageRef = ref(storage, fullPath);
    return await getDownloadURL(storageRef);
  } catch (error) {
    console.error('Error getting business file URL:', error);
    throw error;
  }
};

export const getQRCodeURL = async (
  businessId: string,
  locationId: string
): Promise<string> => {
  try {
    const fullPath = `qrcodes/${businessId}/${locationId}.png`;
    const storageRef = ref(storage, fullPath);
    return await getDownloadURL(storageRef);
  } catch (error) {
    console.error('Error getting QR code URL:', error);
    throw error;
  }
};
import { useCallback, useState } from 'react';
import { DemoFormData } from '@/types';

export function useNavbar() {
  const [showDemoDialog, setShowDemoDialog] = useState<boolean>(false);
  const [demoForm, setDemoForm] = useState<DemoFormData>({
    name: '',
    employees: '',
    timeline: '',
    agency: ''
  });

  const handleLoginClick = useCallback(() => {
    window.location.href = '/login';
  }, []);

  const handleDashboardClick = useCallback(() => {
    setShowDemoDialog(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setShowDemoDialog(false);
  }, []);

  const handleSetDemoForm = useCallback((value: DemoFormData | ((prev: DemoFormData) => DemoFormData)) => {
    if (typeof value === 'function') {
      setDemoForm(value);
    } else {
      setDemoForm(value);
    }
  }, []);

  return {
    showDemoDialog,
    demoForm,
    handleLoginClick,
    handleDashboardClick,
    handleCloseDialog,
    handleSetDemoForm,
    setShowDemoDialog
  };
} 
export const formatTimeAgo = (dateString: string) => {
  if (!dateString) return "15 min atrás";
  const date = new Date(dateString);
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 60) return `${Math.max(1, diffInMinutes)} min atrás`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} h atrás`;
  return `${Math.floor(diffInHours / 24)} d atrás`;
};
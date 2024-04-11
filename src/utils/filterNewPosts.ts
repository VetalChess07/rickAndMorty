export const filterNewPosts = <T extends { id: number }>(existingPosts: T[], newPosts: T[]): T[] => {
   return newPosts.filter(newPost => !existingPosts.some(prevPost => prevPost.id === newPost.id));
 };
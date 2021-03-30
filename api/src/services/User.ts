import Types from '@types';
import Dtos from '@dto';

/**
  * Service for getting user info.
  */
export default class UserService {
  /**
   * Get current API vesion.
   */
  public getUser = (data: Dtos.UserDto): Types.UserResponseDto => ({
    email: data.email,
    name: 'Name',
    photoUrl: 'https://photo.url',
    searches: 0,
    availableSearches: 0
  })
}

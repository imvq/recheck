/**
 * Representation of a user.
 */
export interface User {
  id?: string;

  /**
   * Private token is used to
   * 1) access private user data;
   * 2) access actions from personal user scope.
   *
   * Private tokens must be available only for their owners.
   */
  privateToken?: string;

  /**
   * Shareable ID is public ID of a user.
   * Used to access data and actions that are available for everybody.
   * With shareable ID one cannot modify someone's personal data
   * or change something in uncontrollable way.
   */
  shareableId?: string;

  /**
   * Identifier received from a social network
   * whose OAuth a user has used when registering.
   * Needed to match internal user account with external OAuth data.
   */
  socialId?: string;

  /**
   * Full name (all words in a sigle string).
   * Client must ensure that name has proper form (contains amount of whitespaces etc).
   */
  fullName?: string;

  /**
   * Work email. Has to be unique.
   */
  email?: string;

  /**
   * URL of the photo from a social network which OAuth
   * a user uses to identify themselves. Must be a valid URL.
   * In case a user does not have any avatar, the URL must point to a predifined dummy image.
   */
  photoUrl?: string;

  /**
   * Position at the current workplace.
   * Position for previous worplaces aren't stored.
   */
  currentPosition?: string;

  /**
   * Year from which a user started their current work.
   * Domain: simple string e.g. 2021.
   */
  currentWorkStartingYear?: number;

  /**
   * Month from which a user started their current work.
   * Domain: number in [0, 11] (0 means January 11 means December).
   */
  currentWorkStartingMonth?: number;

  /**
   * How many other users may be opened by the current user for free.
   */
  reviewsAvailable?: number;

  /**
   * Confirmation code (used with INNER JOIN).
   */
  confirmationCode?: string;

  /**
   * A user's company.
   * If a user choses non-existent company, a new company is created
   * (that company will have name provided by the user and default logo URL).
   */
  currentCompany?: Company;

  /**
   * Inviter is a user who invited the current user to use the service.
   * If there is no inviter, this value is to be null.
   */
  inviter?: User | null;

  /**
   * List of users reviews about whom are available to the current user.
   */
  availableUsers?: User[];

  /**
   * List of reviews about the current user.
   */
  reviewsGot?: Review[];

  /**
   * List of current user's reviews.
   */
  reviewsLeft?: Review[];
}

/**
 * Users must confirm themselves by providing their confirmation codes.
 */
export interface UserConfirmation {
  id?: string;

  /**
   * Code value. Only unconfirmed users have records with confirmation codes.
   * Absence of a confirmation code for a user determines the user is confirmed.
   */
  codeValue?: string;
}

/**
 * To provide quick search of users their full names are split by words
 * which are then used in pattern search.
 */
export interface NameToken {
  id?: string;

  /**
   * Value must be a single word.
   * To avoid problems with case sensitivity,
   * the app client have ensure that all values are lowercased.
   */
  tokenValue?: string;

  // Joins.
  bounds?: User[];
}

/**
 * Representation of a company.
 */
export interface Company {
  id?: string;

  /**
   * Company name.
   * Predefined companies' names have to be unique.
   * Newly created companies' names can overlap with existing ones.
   */
  name?: string;

  /**
   * URL of the logo.
   * ONLY predefined companies can have logo.
   * Therefore, NULL value determines a customly created company.
   */
  logoUrl?: string | null;

  /**
   * Company members.
   * Array contains ONLY users whose CURRENT company is the observed one.
   */
  members?: User[];
}

/**
 * Representation of a review.
 */
export interface Review {
  id?: string;

  /**
   * Since a review structure can vary frequently and can have various structure,
   * its content is stored as a plain text.
   * The app client is the one who is responsible for validation of reviews content.
   */
  content?: string;

  /**
   * Unix timestamp of review creation.
   */
  creationDate?: number;

  /**
   * Author of the review.
   */
  author?: User;

  /**
   * User whom review is written about.
   */
  target?: User;
}

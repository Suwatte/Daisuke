import { BasicURL, User } from "../../../types";

export enum BasicAuthenticationUIIdentifier {
  EMAIL,
  USERNAME,
}

export type RunnerAuthenticatable = {
  getAuthenticatedUser(): Promise<User | null>;
  handleUserSignOut(): Promise<void>;
};

export type WebViewAuthenticatable = RunnerAuthenticatable & {
  /**
   * HTTP Request to be made in the WebView
   */
  getWebAuthRequestURL(): Promise<BasicURL>;

  /**
   * Handle Cookies received from the webview
   * @param name The name of the received cookie
   * @return A boolean value indicating whether the user has been successfully logged in
   */
  didReceiveSessionCookieFromWebAuthResponse(name: string): Promise<boolean>;
};

export type BasicAuthenticatable = RunnerAuthenticatable & {
  /**
   * Used to decide if suwatte shows login with "username" & password or "email" and password.
   */
  readonly BasicAuthUIIdentifier: BasicAuthenticationUIIdentifier;

  /**
   * Handle basic identifier-password authentication
   */
  handleBasicAuth(identifier: string, password: string): Promise<void>;
};

export type OAuthAuthenticatable = RunnerAuthenticatable & {
  getOAuthRequestURL(): Promise<BasicURL>;
  handleOAuthCallback(response: string): Promise<void>;
};

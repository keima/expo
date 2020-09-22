package expo.modules.webbrowser;

import android.content.Intent;

import org.unimodules.core.errors.CurrentActivityNotFoundException;
import org.unimodules.core.interfaces.InternalModule;

import java.util.ArrayList;
import java.util.List;

import androidx.annotation.AnimRes;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.browser.customtabs.CustomTabsIntent;
import expo.modules.webbrowser.error.PackageManagerNotFoundException;

public interface CustomTabsActivitiesHelper extends InternalModule {

  @NonNull
  ArrayList<String> getCustomTabsResolvingActivities() throws PackageManagerNotFoundException, CurrentActivityNotFoundException;

  @NonNull
  ArrayList<String> getCustomTabsResolvingServices() throws PackageManagerNotFoundException, CurrentActivityNotFoundException;

  @Nullable
  String getPreferredCustomTabsResolvingActivity(@Nullable List<String> packages) throws PackageManagerNotFoundException, CurrentActivityNotFoundException;

  @Nullable
  String getDefaultCustomTabsResolvingActivity() throws PackageManagerNotFoundException, CurrentActivityNotFoundException;

  void startCustomTabs(CustomTabsIntent intent) throws CurrentActivityNotFoundException;

  boolean canResolveIntent(Intent intent) throws PackageManagerNotFoundException, CurrentActivityNotFoundException;

  void setWindowTransitionAnimation(
    CustomTabsIntent.Builder builder,
    @AnimRes int startAnimationsEnterResId, @AnimRes int startAnimationsExitResId,
    @AnimRes int exitAnimationsEnterResId, @AnimRes int exitAnimationsExitResId
  ) throws CurrentActivityNotFoundException;
}
